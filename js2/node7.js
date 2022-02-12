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

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = " ".repeat(n - i);
    let str2 = "*".repeat(i * 2 - 1);
    console.log(str + str2 + str);
  }
}

pyramid(10);
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

function getH(per) {
  //   let str = " ";
  //   let novo = `${per.repeat(3)}`;
  //   let lengthi = novo.split('');
  //   let estere =
  //   console.log(estere);
  //   for (let i = 0; i < 6; i++) {}
  //   console.log((novo += lengthi.length = " "), novo);
}

getH("#");
