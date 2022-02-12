const obj = Object.create(
  {},
  {
    name: {
      value: "Abd",
      // writable:true,
      // enumerable:true,
      // configurable:true
    },
  }
);

// obj.name = "fozil";
// delete obj.name
// console.log(obj.name);
// for (const a in obj) {
//   console.log(obj[a]);
// }

//object create
// const person = {
//   name: "Abdulloh",
//   age: 18,
// };

// person.name = "Mirsolih";

const person = Object.create(
  {},
  {
    name: {
      value: "Abdulloh",
      writable: true,
      enumerable: true,
      configurable: true,
    },
    birthYear: {
      value: 2004,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value){
        console.log('Yoshini kiriting:',value);
      }
    },
  }
);

// person.name = "Azimjon";

// delete person.age;

// for (const key in person) {
//   console.log(person[key]);
// }
