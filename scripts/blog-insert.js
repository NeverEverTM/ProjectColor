
function GetIcon(icon) {
    if (icon == "new")
        return "_new";
    if (icon == "firelight")
        return "_fl";

    return "";
}

async function InsertBlogs() {
    var _response = await fetch("./blogs/lookUp.json");
    var _lookUpTable = await _response.json()
    let currentDiv = document.getElementById("container");

    for (var i = 0; i < _lookUpTable.length; i++) {
        // create button
        let newButton = document.createElement("button");
        newButton.setAttribute("class", "blog-post");
        newButton.name = _lookUpTable[i].name;
        newButton.type = "button";
        newButton.onclick = function () { 
            window.location.href = "./blog-content.html?id=" + newButton.name;
        };

        // create a new div element
        let newDiv = document.createElement("div");
        newDiv.style = "display: flex; justify-content: space-between;"
        newButton.appendChild(newDiv)

        // create title container
        let newH2 = document.createElement("h2");
        newDiv.appendChild(newH2);

        // create icon image
        let newImg = document.createElement("img")
        newImg.style = "vertical-align:middle;"
        newImg.src = "./img/icons/blog_icon" + GetIcon(_lookUpTable[i].icon) + ".png";
        newImg.height = 30;
        newImg.width = 30;
        newH2.appendChild(newImg);

        // create title
        let newContent = document.createTextNode(_lookUpTable[i].title);
        newH2.appendChild(newContent);

        // create date container
        let newH3 = document.createElement("h3");
        newH3.setAttribute("class", "blog-date");
        newDiv.appendChild(newH3);

        // create date
        let newDate = document.createTextNode(_lookUpTable[i].date);
        newH3.appendChild(newDate);

        // add to blogs
        currentDiv.appendChild(newButton);
    }
}

InsertBlogs();