var blogs = document.getElementById("blog");
var i;
    
for (i = 0; i < blogs.length; i++) 
{
    blogs[i].getElementById("blog-name").content = "Name"
    blogs[i].getElementById("blog-content").content = "Content"
    blogs[i].getElementById("blog-date").content = "Date"
}