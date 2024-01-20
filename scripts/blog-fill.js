var blogList = document.getElementsByClassName("blog-post"); 

for (var i = 0; i < blogList.length; i++)
    $(blogList[i]).load("./html/blogs/" + blogList[i].name + "-post.html");