// arrays: filter

var people = [
  {
    name: "John",
    age: 21
  },
  {
    name: "Bob",
    age: 20
  },
  {
    name: "Anne",
    age: 22
  }
];

var result = people.filter(function(person) {
  return person.age < 22;
});

console.log(result);
// [ { name: 'John', age: 21 }, { name: 'Bob', age: 20 } ]
