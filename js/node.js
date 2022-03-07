// if else

// var ball = 49;

// // if(age<=17){
// //   console.log('Hali guvohnoma yoq');
// // } else {
// //   console.log('Guvohnoma bor');
// // }

// if (ball <= 90 && ball >= 70) {
//   console.log("Grand");
// } else if (ball <= 70 && ball >= 50) {
//   console.log("oqishga kirdi 70%");
// } else {
//   console.log("Oqishga kirmadi");
// }

// switch case

// console.log();
// var kun = 3;

// switch (kun) {
//   case 4:
//     console.log("Payshanba");
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 5:
//     console.log("Chorshanba");
//   default:
//     console.log("Hafta kunini kiriting");
// }

// var day = 25;

// switch (day) {
//   case 24:
//     console.log("Birinchi kun");
//   case 25:
//     console.log("Bugun main tugilgan kunim");
//     break;
//   case 23:
//     console.log("bugun");
// }

// let day;

// if (day == 'Dushanba') {
//   console.log('Soat 5 da darsing bor' , `Bugun ${day}`);
// } else if (day == 'Seshanba'){
//   console.log('Bugun ishdan dam' , `Bugun ${day}`);
// } else {
//   console.log('Bugun dam olaver');
// }

// let age = 20;
// if (age >= 18) {
//   alert("Sanga kirish mumkin");
// } else {
//   alert("Sen hali yosh");
// }

// console.log(Math.floor(4.333));

// function getMathFloor(num){
//   console.log(+(num-0.5).toFixed(0));
// }
// getMathFloor(4.333)

// function getBla(arr) {
//   const a = arr.map((value)=>{
//     return value.length
//   })
//   arr.forEach(val => {
//     if (val.length>= Math.max(...a)) {
//       console.log(val);
//     }
//   });
// }
// getBla(["Aleksey", "Kartoshkaaaaaa", "Margarita", "Morgenshtern", "Monica"]);

// console.log(epmty);

// let age = 19;

// switch (age) {
//   case 19:
//     console.log('Sanga kirish mumkin');
// }

// function getInteger(arr) {
//   arr.map((value) => {
//     if (Number.isInteger(value)) {
//       console.log(value % 2 == 0);
//     } else {
//       console.log(undefined);
//     }
//   });
// }
// getInteger([1, 2, 3, 4, 5, 6, 7, 8]);

// const sqrt = value => {
//   for (let i = 0; i <= value; i++) {
//     if (i * i === value) return i;
//   }
//   return 'bu sonni ildizi yoq';
// };
// console.log(sqrt(9));

// var num = 9
// console.log(Math.exp(Math.log(num) / 2));

// let arr = [99,2,3]
// console.log(arr[0]);

// function sumMul(n, m) {
//   let returner = 0;
//   for (let i = 1; i * n < m; i++) {
//     console.log((returner += i * n));
//   }
//   return returner > 0 ? returner : "INVALID";
// }

// sumMul(2, 9);

// function reverse(arr) {
//   console.log(arr.reverse());
// }
// reverse([1,2,3,4])

// function incrementItems(arr) {
//   const array = arr.map((value)=>{
//     return value + 1;
//   })
//   console.log(array);
// }

// incrementItems([0, 1, 2, 3])


const arr = [1, 2, 3, 4, 5, 6]
console.log(arr);