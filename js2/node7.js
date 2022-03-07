// let arr = [1, [3], [[4]], 2];
// let flatted = arr.flat(Infinity);
// console.log(flatted.sort((a, b) => a - b));

// const proto = {
//   age: 20,
// };

// const obj = Object.create(proto);
// console.log(obj.age);

// console.log(string);
// function generatePyramid() {
//     var totalNumberofRows = 5;
//     var output = '';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += j + '  ';
//         }
//         console.log(output);
//         output = '';
//     }
// } generatePyramid();

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = " ".repeat(n - i);
//     let str2 = "*".repeat(i * 2 - 1);
//     console.log(str + str2 + str);
//   }
// }

// pyramid(10);
//          *
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************

// ###    ###
// ##########
// ###    ###
// ###    ###
// ##########
// ###    ###


// x qilib yasash
let k = 20;
let st = "";
let r = "";
let x = k + 1;
// console.log(k, x);
for (let i = 1; i <= k; i++) {
  if (i == k) {
    st = "";
  }
  for (let j = 1; j <= k; j++) {
    if (i == 1) {
      r = st;
      st = r + "#";
    } else if (i == k) {
      r = st;
      st = r + "#";
    }
    if (j == 1 || j == k) {
      r = r + "#";
      st = r;
      r = "#";
    } else {
      if (i == j) {
        r = r + "#";
      } else if (i + j == x) {
        r = r + "#";
      } else {
        r = r + " ";
      }
    }
  }
  console.log(st);
}
