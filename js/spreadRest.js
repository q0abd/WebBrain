// /Bu bizda massivda Spread oeratorlarini ishlatish edi...
// Spread

// const citiesInUzbekistan = ["Tashkent", "Bukhara", "Samarkand"];
// const citiesInRussia = ["Moscow", "Valdivastok", "Kazan"];

// // Spread orqali biz ikkita massivni birlashtirdik
// // const allCities = [...citiesInRussia, ...citiesInUzbekistan];

// // Biz concat orqali birlashtirib oldik , bu eski variant
// const allCities = citiesInRussia.concat(citiesInUzbekistan);

// console.log(allCities);

//Spread in Objects

// const person1 = {
//   name: "Abdulloh",
//   age: 18,
//   bornIn: "Tashkent",
//   surname: "Kiyomov",
// };

// const person2 = {
//   name: "Asadbek",
//   age: 17,
//   bornIn: "Namangan",
//   surname: "Abduvoitov",
// };

///Biz agar Spreadni objectda ishlatmoqchi bolsak  biz demak uning uchun malumotni {}ga qoyishimiz kerak ,
//  uning sababi , bizga u obj.keyslarini qaytaradi , va uni qayta bizga
//  hamma objni malumotlarni chiqazishi uchun {}ga qoyamiz

// console.log({ ...person1, ...person1 });

// /Practice

// //Spread ishlatilmasiligi oqibati

// //eng yomon yoli
// console.log(Math.max(1, 2, 3, 4, 5));

// // console.log(Math.max(numbers)); shuni amalga oshirish uchun biz pastagi yolda ishlashimiz kerak
// console.log(Math.max.apply(null, numbers));

// // Tepadagi misollarni eng soddasi bu : Spread orqali ishlash
// console.log(Math.max(...numbers));

// REST ES6 chiqga
// restni biz shu korinishida olib kelamiz
// function sum(a, b, ...rest) {
//   // console.log(a, b, rest);
//   return a + b + rest.reduce((a, i) => a + i, 0);
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Bu yolda parametr berish ishlamaydi
// console.log(sum([1,2,3,4,5]))

// Bu SPREAD orqali parametr berish
// console.log(sum(...numbers));

// //Bunda biz bittadan har bitta malumotni chiqazamiz , bu optimal yol emas!
// const num1 = numbers[0];
// const num2 = numbers[1];
// console.log(num1, num2);

// //Shu yolda ishllash tasiya etiladi
// const [a, b, ...other] = numbers;
// console.log(a, b, other);




//Bu bizda massivda Spread oeratorlarini ishlatish edi...
//Spread

const citiesInUzbekistan = ["Tashkent", "Bukhara", "Samarkand"];
const citiesInRussia = ["Moscow", "Valdivastok", "Kazan"];

// Spread orqali biz ikkita massivni birlashtirdik Spread ES6
const allCities = [...citiesInUzbekistan, ...citiesInRussia];

// Biz concat orqali birlashtirib oldik , bu eski variant
// const allCities = citiesInRussia.concat(citiesInUzbekistan);

// console.log(allCities);

const person1 = {
  name: "Abdulloh",
  age: 18,
  bornIn: "Tashkent",
  surname: "Kiyomov",
};

const person2 = {
  name: "Asadbek",
  age: 17,
  bornIn: "Namangan",
  surname: "Abduvoitov",
};

// console.log({ ...person1 }, { ...person2 });

//Practice
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Spread ishlatilmasiligi oqibati

//eng yomon yoli
// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));

// console.log(Math.max(numbers)); shuni amalga oshirish uchun biz pastagi yolda ishlashimiz kerak
// console.log(Math.max.apply(null, numbers));

// Tepadagi misollarni eng soddasi bu : Spread orqali ishlash
// console.log(Math.max(...numbers));

// REST ES6 chiqga
// restni biz shu korinishida olib kelamiz
// function sum(a, b, ...rest) {
//   // console.log(a, b, rest);
//   return a + b + rest.reduce((a, i) => a + i, 0);
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Bu yolda parametr berish ishlamaydi
// console.log(sum([1,2,3,4,5]))

// // Bu SPREAD orqali parametr berish
// console.log(sum(...numbers));

// //Bunda biz bittadan har bitta malumotni chiqazamiz , bu optimal yol emas!
// const num1 = numbers[0];
// const num2 = numbers[1];
// console.log(num1, num2);

// //Shu yolda ishllash tasiya etiladi
// const [a, b, ...other] = numbers;
// console.log(a, b, other);

function getSum(a, b, ...rest) {
    // return a+b+rest.reduce((v,i)=>v+i,0)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(getSum(...numbers));

const [num1,num2,...others] = numbers
// console.log(num1,num2,others)

