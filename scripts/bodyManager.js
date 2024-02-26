class BodyManager {
    static currentBodyId = "";
    static categoryBody = document.getElementById("category-body");

    // TODO: changing blog loading, so is done in a separate html page as the Home one
    // This should solve the hash not working, as well as setting manually some blog content on the head

    static ThrowError(e)
    {
        $("#category-body").load("./html/blogs/test-content.html");
        console.log(e);
    }

    static GetPath(_type)
    {
        switch (_type) {
            case "body":
                return "./html/body-" + BodyManager.currentBodyId + ".html";
            case "blog":
                return "./html/blogs/" + BodyManager.currentBodyId + "-content.html";
            default:
                throw Error("Not a valid type!");
        }
    }

    static ChangeCategory(_category, _type = "body") {
        if (this.currentBodyId == _category)
            return;
        this.currentBodyId = _category;

        while (this.categoryBody.hasChildNodes())
            this.categoryBody.removeChild(this.categoryBody.firstChild);

        try 
        {
            var _path = this.GetPath(_type);

            $.ajax({
                url: _path,
                type: 'HEAD',
                error: function () { BodyManager.ThrowError("Not a valid path!"); },
                success: function () {
                    $("#category-body").load(_path);

                    var _url = new URL(window.location.href);
                    _url.searchParams.set("id", _category)
                    _url.searchParams.set("type", _type)

                    if (history.pushState)
                        window.history.pushState({}, '', _url);
                    return
                }
            });
        }
        catch (e) { this.ThrowError(e); }
    }
}

var _search = new URLSearchParams(window.location.search);
var _id = _search.has("id") ? _search.get("id") : "home";
var _type = _search.has("type") ? _search.get("type") : "body";

BodyManager.ChangeCategory(_id, _type);