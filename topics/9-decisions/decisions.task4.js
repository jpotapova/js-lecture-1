// TASK: rewrite to a switch

var a = 4;

if (a === 0) {
  console.log("Nothing found");
} else if (a === 1) {
  console.log("1 item found");
} else if (a === 2 || a === 3) {
  console.log("Several items found");
} else {
  console.log("Unexpected input");
}
