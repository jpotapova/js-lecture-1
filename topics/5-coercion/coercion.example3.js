// Explicit type coercion: string --> number

var a = "20";
var b = 5;

console.log(a + b); // 205
console.log(parseInt(a, 10) + b); // 25
