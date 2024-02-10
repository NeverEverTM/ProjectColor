class BodyManager
{
    static currentBodyId = "";
    static categoryBody = document.getElementById("category-body");

    // TODO: changing blog loading, so is done in a separate html page as the Home one
    // This should solve the hash not working as well as setting manually some blog content on the head

    static ChangeCategory(_category, _type = "body")
    {
        if (BodyManager.currentBodyId == _category)
            return;
        BodyManager.currentBodyId = _category;

        while (BodyManager.categoryBody.hasChildNodes())
            BodyManager.categoryBody.removeChild(BodyManager.categoryBody.firstChild);

        try
        {
            switch(_type)
            {
                case "body":
                    $("#category-body").load("./html/body-" + BodyManager.currentBodyId + ".html");
                    break;
                case "blog":
                    $("#category-body").load("./html/blogs/" + BodyManager.currentBodyId + "-content.html");
                    break;
            }
            var _url = new URL(window.location.href);
            var _hash;
            _url.searchParams.set("id", _category)
            _url.searchParams.set("type", _type)

            if (history.pushState)
                window.history.pushState({},'', _url);
        }
        catch(e)
        {
            $("#category-body").load("./html/blogs/test-content.html");
            console.log(e);
        }
    }
}

var _search = new URLSearchParams(window.location.search);
var _id = _search.has("id") ? _search.get("id") : "home";
var _type = _search.has("type") ? _search.get("type") : "body";

BodyManager.ChangeCategory(_id, _type);