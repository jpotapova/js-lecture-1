// DOM - search nodes

// by id
console.log(document.getElementById("documentary"));

// single element (first occurence)
console.log(document.querySelector(".highlighted"));

// selector - get collection
var allHighlighted = document.querySelectorAll(".highlighted");
console.log(allHighlighted[0]);
console.log(allHighlighted[1]);
