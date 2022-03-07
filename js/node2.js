let str = "Assalamu Alekum Nima gap";
let trimStr = str.trim()
let count = 1;
for (let i = 0; i < trimStr.length; i++) {
  if (trimStr[i] === " ") {
      count++
  }
}
console.log(count);

// let str = "Salomalekum chi gap abd ddd aaa";
// let trimmed = str.trim()
// let count = 1
// for (let i = 0; i < trimmed.length; i++) {
//   if (trimmed[i] === " ") {
//     count++
//   }
// }
// console.log(count);

// let str = "";
// let str2 = "";
// let str3 = "";
// function createPhoneNumber(numbers) {
//   numbers.map((value, index) => {
//     if (index <= 2) {
//       str += value;
//     }
//     if (index >= 3 && index <= 5) {
//       str2 += value;
//     }
//     if (index >= 6) {
//       str3 += value;
//     }
//   });
//   console.log(`(${str}) ${str2}-${str3}`);
// }
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// let str = 'Assalamu alekum Man Ahror'

// var arr = [[1], [[2]]];

// let flatted = arr.flat();
// let newArr = flatted.reduce((item, value) => {
//   return Math.pow(value, 2) + item;
// }, 0);

// console.log(newArr);

// let number = 15;

// console.log(number ** 0.5);
