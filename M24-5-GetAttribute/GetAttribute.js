// get the value of the href attibute of the <a> element

const element = document.getElementById("myLink"); 
let text = element.getAttribute("class"); 
document.getElementById("demo").innerHTML = text;