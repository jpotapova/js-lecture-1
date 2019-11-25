// DOM attributes

var google = document.getElementById("google");

console.log(google.hasAttribute("href"));
console.log(google.getAttribute("href"));

google.setAttribute("href", "www.goooogle.com");
console.log(google.getAttribute("href"));

google.removeAttribute("href");
console.log(google.getAttribute("href"));
