// const abd = {
//   name: "Abdulloh",
//   age: 18,
//   infoAbout: function () {
//     console.log(`My name is ${this.name}`);
//     console.log(`My age is ${this.age}`);
//   },
// };

// const azim = {
//   name: "Azimjon",
//   age:22
// };

// abd.infoAbout.bind(azim)()
// abd.infoAbout.call(azim)
// abd.infoAbout.apply(azim)

// function hello() {
//   console.log("hello", this);
// }

// const person = {
//   name: "Abdulloh",
//   age: 18,
//   logInfo: function () {
//     console.log(this.name);
//     console.log(this.age)
//   },
// };

// const devushka = {
//   name: "Duxtarcha",
//   age: 15,
// };

// person.logInfo.bind(devushka)();
// person.logInfo.call(devushka,'Frontend','123-43-34')
// person.logInfo.apply(devushka,['Frontend','123-43-34'])

// const person = {
//   name: "Misolih",
//   job: "Frontend Developer",
//   age: 24,
//   info: function (name) {
//     console.group(`${name} info`);
//     console.log(this.name);
//     console.log(this.job);
//     console.log(this.age);
//     console.groupEnd();
//   },
// };

// const person2 = {
//   name: "Azimjonaka",
//   job: "Frontend Mentor",
//   age: 24,
// };

// person.info.bind(person2)();
// person.info.call(person2, "Azimjons");
// person.info.apply(person2, []);
