// DOM entry point, access node and read text content
console.log(document.body);

// Single element nav: firstElementChild, nextElementSibling
console.log(document.body.firstElementChild); // ul
console.log(document.body.firstElementChild.nextElementSibling); // table
console.log(
  document.body.firstElementChild.nextElementSibling.nextElementSibling
    .nextElementSibling
); // null

// parentElement
var table = document.body.firstElementChild.nextElementSibling;
console.log(table.parentElement); // body
