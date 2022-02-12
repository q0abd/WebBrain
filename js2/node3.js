let arr = [[1],[[2]]];
let flat = arr.flat();
let a = flat.reduce((item, value) => {
  return Math.pow(value, 2) + item;
}, 0);
console.log(a);
