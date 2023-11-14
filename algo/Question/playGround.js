const currying = (a) => (b) => b ? currying(a + b) : a;

console.log(currying(5)(3)(55)());
