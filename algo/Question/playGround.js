//Prottotype

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//prototype
Person.prototype.fullName = function () {
  return `hi, ${this.firstName} ${this.lastName}`;
};

//inheritence
const personOne = new Person("One", " Hello");
const personTwo = new Person("Two ", " Hello");

// console.log(personOne.fullName());

//call, apply, bind
let name = {
  firstName: "Hello",
  lastName: "World",
};

const showDetails = function (city, state) {
  console.log(
    `Hi, ${this.firstName}-${this.lastName} , from ${city}, ${state}.`
  );
};

// showDetails.call(name, "SAMBBALPUR", "ODISHA");
// showDetails.apply(name, ["SAMBBALPUR", "ODISHA"]);

let test = showDetails.bind(name, ["SAMBBALPUR", "ODISHA"]);
// test();

///////////////////
//rest
function testFunc(a, b, ...args) {
  console.log({
    a,
    b,
    args,
  });
}

testFunc(1, 2, 2, 34, 4, 5, 65, 7);

////spread
const arr = [1, 2, 2, 3, 4, 5, 6, 7];

const [a, b, ...c] = arr;

console.log({
  a,
  b,
  c,
});
