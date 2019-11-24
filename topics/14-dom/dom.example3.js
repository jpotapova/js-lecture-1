// DOM - search nodes

// by id
console.log(document.getElementById("documentary").innerText);

// single element (first occurence)
console.log(document.querySelector(".highlighted").innerText);

// selector - get collection
var allHighlighted = document.querySelectorAll(".highlighted");
console.log(allHighlighted[0].innerText);
console.log(allHighlighted[1].innerText);
