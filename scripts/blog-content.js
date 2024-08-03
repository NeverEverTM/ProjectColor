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