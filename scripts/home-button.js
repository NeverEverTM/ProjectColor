var _url = new URL(window.location.href);
if (history.pushState)
    window.history.pushState({}, '', _url);

// create logo div and href
let logoDiv = document.getElementById("logo");
let logoA = document.createElement("a");
logoA.href = "./";
logoDiv.style = "text-align:center;"
logoDiv.appendChild(logoA)

// adjust image
let logoImg = document.createElement("img")
logoImg.src = "./img/title.png";
logoImg.style = "min-width: 25%;max-width: 25%;min-height: 30%;"
logoImg.alt = "Project Color Media";
logoA.appendChild(logoImg);

// create homebuttons
function CreateButton(name, _href) {
    let newButton = document.createElement("button");
    newButton.setAttribute("class", "homebutton");
    newButton.name = name;
    newButton.type = "button";
    newButton.onclick = function () { 
        window.location.href = "./" + _href + '.html';
        
        var _url = new URL(window.location.href);
        if (history.pushState)
            window.history.pushState({}, '', _url);
    };

    // create icon image
    let newImg = document.createElement("img")
    newImg.src = "./img/icons/icon_" + name.toLowerCase() + ".png";
    newImg.height = 30;
    newImg.width = 30;
    newButton.appendChild(newImg);

    let newContent = document.createTextNode(" " + name);
    newButton.appendChild(newContent);
    return newButton;
}

// create top bar div
let topbarDiv = document.getElementById("top-bar");
topbarDiv.style = "text-align: center;display:block";

// append buttons
topbarDiv.appendChild(CreateButton("Home", "index"))
topbarDiv.appendChild(CreateButton("Blogs", "blog-archive"))
topbarDiv.appendChild(CreateButton("Commissions", "comms-info"))
topbarDiv.appendChild(CreateButton("Gallery", "gallery"))
topbarDiv.appendChild(CreateButton("About", "about"))
topbarDiv.appendChild(CreateButton("Contacts", "contact"))