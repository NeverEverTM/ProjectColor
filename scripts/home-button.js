
var buttonList = document.getElementsByClassName("homebutton");    

for (var i = 0; i < buttonList.length; i++) 
{
    buttonList[i].addEventListener("click", function()
    {
        BodyManager.ChangeCategory(this.id);
    });
}