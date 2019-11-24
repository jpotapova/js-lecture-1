// arrays - copying

var names1 = ["Anne", "Tom", "Bob", "Jane"];
var names2 = names1;

// copy only reference
names2[0] = "Betty";
console.log(names1);
console.log(names2);

// real copy
var names3 = names1.slice(0, names1.length);
names3[0] = "Evan";
console.log(names1);
console.log(names3);
