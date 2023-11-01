function Employeename() {}

Employeename.prototype = {
  name: [],
  showName: () => {
    return this.name;
  },
  showNameTwo: function () {
    return this.name;
  },
};

var elemOne = new Employeename();
console.log(elemOne.name.push("12345"));
console.log(elemOne.showNameTwo(), " oneee");

var elemTwo = new Employeename();
console.log(elemTwo.name.push("Hello"));
console.log(elemTwo.showNameTwo(), " twoww");
