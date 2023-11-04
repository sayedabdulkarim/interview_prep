var fArr = [1, 2, 3, 4, 5];

let res = fArr.filter((o) => o > 4);

// console.log(res);

// Array.prototype.myFilter = (cb) => {
//   console.log(this);
// };
Array.prototype.myFilter = function (cb) {
  //   console.log(this);
  console.log({ cb, that: this });
  let res = [];

  for (let i = 0; i < this.length; i++) {
    // if (this[i] > 4) {
    if (cb(this[i])) {
      res.push(this[i]);
    }
    console.log(cb(this[i]), " cb(this[i])");
  }
  //   console.log(res);
  return res;
};

console.log(fArr.myFilter((o) => o > 4));

//////////////////////////////////////
