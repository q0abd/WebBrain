// const myNumber = 42;

// localStorage.setItem("num", myNumber);
// console.log(localStorage.getItem("num"));

const obj = {
  name: "Abdulloh",
  name2:'Oysha Surat Qizi',
  age: 18,
};

// localStorage.setItem("info", obj);
// const getter = localStorage.getItem('info')
// const parsing = JSON.parse(getter)
// console.log(parsing);

// const toArr = Object.entries(obj);
// console.log(toArr.length);
// if (toArr.length == 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const toArr = Object.entries(objectcha);

// toArr.length == 0
//   ? console.log(`Quyidagi object bo'sh holatda - ${true}`)
//   : console.log(false);

// if (toArr.length == 0) {
//   console.log(`Quyidagi object bo'sh holatda - ${true}`);
// } else {
//   console.log(false);
// }

const person = {
  name: "Abdulloh",
  age: 18,
};

//localga yuborildi
localStorage.setItem("jonatdik", person);

//localdan chaqirib olindi
const yeap = localStorage.getItem("jonatdik");

const toObj = JSON.parse(yeap);
console.log(toObj);


