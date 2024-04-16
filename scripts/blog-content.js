var _search = new URLSearchParams(window.location.search);
var _id = _search.has("id") ? _search.get("id") : null;

async function SetContent() {
    var _response = await fetch("./blogs/lookUp.json");
    var _lookUpTable = await _response.json()

    for (var i = 0; i < _lookUpTable.length; i++) {
        if (_lookUpTable[i].name == _id)
            _id = _lookUpTable[i];
    }

    let titleDiv = document.getElementById("title");
    let titleText = document.createTextNode(_id.title);
    titleDiv.appendChild(titleText);

    let dateDiv = document.getElementById("date");
    let dateText = document.createTextNode(_id.date);
    dateDiv.appendChild(dateText);

    var _path = "./blogs/" + _id.name + "-content.html";
    $.ajax({
        url: _path,
        type: 'HEAD',
        error: function () {
            $("#content").load("./blogs/test-content.html");
            console.log(e);
        },
        success: function () {
            $("#content").load(_path);
            document.getElementById('page-title').content = _id.title;
            document.getElementById('page-description').content = _id.date;
        }
    });
}

SetContent();

// // create a new div element
// let newDiv = document.createElement("div");
// newDiv.style = "display: flex; justify-content: space-between;"
// newButton.appendChild(newDiv)

// // create title container
// let newH2 = document.createElement("h2");
// newDiv.appendChild(newH2);

// // create icon image
// let newImg = document.createElement("img")
// newImg.style = "vertical-align:middle;"
// newImg.src = "/img/icons/blog_icon" + GetIcon(_lookUpTable[i].icon) + ".png";
// newImg.height = 30;
// newImg.width = 30;
// newH2.appendChild(newImg);

// // create title
// let newContent =
// newH2.appendChild(newContent);

// // create date container
// let newH3 = document.createElement("h3");
// newH3.setAttribute("class", "blog-date");
// newDiv.appendChild(newH3);

// // create date
// let newDate = document.createTextNode(_lookUpTable[i].date);
// newH3.appendChild(newDate);

// // add to blogs
// let currentDiv = document.getElementById("container");
// currentDiv.appendChild(newButton);