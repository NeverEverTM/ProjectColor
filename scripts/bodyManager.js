class BodyManager
{
    static currentBodyId = "";
    static categoryBody = document.getElementById("category-body");

    static ChangeCategory(_category, _isBlog = false)
    {
        if (BodyManager.currentBodyId == _category)
            return;
        BodyManager.currentBodyId = _category;

        while (BodyManager.categoryBody.hasChildNodes())
            BodyManager.categoryBody.removeChild(BodyManager.categoryBody.firstChild);

        if (_isBlog)
            $("#category-body").load("html/blogs/" + BodyManager.currentBodyId + "-content.html");
        else
            $("#category-body").load("html/body-" + BodyManager.currentBodyId + ".html");
    }
}
BodyManager.ChangeCategory("home");