// objects: copying

var user1 = {
  name: "John",
  age: 30,
  city: "London"
};

// only reference is copied
var user2 = user1;
user2.age = 20;
console.log(user2.age); // 20
console.log(user1.age); // 20

// real copy
var user3 = {};
Object.assign(user3, user1);
user3.age = 25;
console.log(user1.age); // 20
console.log(user3.age); // 25
