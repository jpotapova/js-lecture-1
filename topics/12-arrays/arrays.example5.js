// arrays: map

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

var result = people.map(function(person) {
  return person.name;
});

console.log(result); // [ 'John', 'Bob', 'Anne' ]
