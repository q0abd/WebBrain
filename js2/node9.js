// function getLength(arr){
//   const newArr = arr.map((value)=>{
//     return value.length
//   })

//   newArr.forEach(val => {

//   });
// }

// getLength(["Asadbek", "Kadrv", "Abdulloh", "Habibulloh"]);

// let str = "123456789";

// let split = eval(str.split("").join("+"));

// console.log(split);

// let string = 'WebBr@in Ac@demy'
// console.log(string.replaceAll('@','a'));

// let string = 'WebBrain Codingcamp'
// console.log(Math.sqrt(+string.length).toFixed(2));

// let num = [1, 2, 3, 4, 5];

// const arr = num.map((value)=>{
//   return value
// })
// if (num.length % 2 === 0) {
//   let a = num.length / 2 + 1;
//   let b = num.indexOf(a) + 1;
//   console.log(num.indexOf(a), b);
// }else{
//   console.log(num.indexOf(a))
// }

// function getLastItem(arr) {
//   console.log(arr.join("").charAt(arr.length-1));
// }
// getLastItem([1, 2, 3, 4, 7]);

// let arr = ["214", true, false, 2, 2.15, [], null];

// const ozgaruvchi = arr.map((value)=>{
//   return typeof value
// })

// console.log(ozgaruvchi);

//Birinchi
// let string = "WebBr@in Ac@demy";
// console.log(string.replaceAll("@", "a"));

// // Ikkinchi
// let str = "Ass#a###lamu al#e#kum";
// console.log(str.replaceAll("#", ""));

// // Uchinchi
// let string2 = 'WebBrain Codingcamp'
// let two = (string2.length)**0.5
// console.log(
//   two.toFixed(2)
// );

// funksiya
// declaration function
// function getNumber(ikki, uch) {
//   console.log(ikki + uch);
// }
// getNumber(2, 3);

// // expression function
// const getNumber = function (ikki, uch) {
//   console.log(ikki + uch);
// };
// getNumber(2, 3);

// // arrow function
// const getNumber = (besh, tort) => {
//   console.log(besh * tort);
// };
// getNumber(5, 4);

// recursive
// function countDown(number) {
//   console.log(number);
//   const newNumber = number - 1;
//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }
// countDown(4);

// function sardoraka(x) {
//   if (x === 0) {
//     return 1;
//   } else {
//     return x * sardoraka(x - 1);
//   }
// }
// console.log(sardoraka(5))

// function repeatStr (n, s) {
//   if (n == 1)
//       return s;
//   else
//       return s.concat(repeatStr(n - 1, s))
// }
// console.log(repeatStr(4, "Hi"));

// let drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10},
//   {name: "coffee", price: 5},
//   {name: "tea", price: 5},
//   {name: "horchata", price: 75},
//   {name: "milk",hozi price: 25},
// ];

// console.log(drinks.sort((a, b) => (a.price > b.price) ? 1 : -1));

// Раскидать людей в разные массивы в зависимости от их почты
// let users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
// ];
// let emails = {
//   org: [],
//   net: [],
//   info: [],
// };
// let other = [];

// users.map((value) => {
//   if (value.email.includes("org")) {
//     emails.org.push(value.email)
//   }
//   if (value.email.includes("net")) {
//     emails.net.push(value.email)
//   }
//   if (value.email.includes("info")) {
//     emails.info.push(value.email)
//   }``
// });

// console.log(emails.org);
// console.log(emails.net);
// console.log(emails.info);

// let number = 222;

// if (number % 2 === 0) {
//   console.log(Math.pow(number,2));
// } else {
//   console.log('Tamom');
// }

// let oy = 22;
// switch (oy) {
//   case 1:
//     console.log("30-kun");
//     break;
//   case 2:
//     console.log("28-29 kun");
//     break;
//   case 3:
//     console.log("30-kun");
//     break;
//   case 4:
//     console.log("30-kun");
//     break;
//   case 5:
//     console.log("30-kun");
//     break;
//   case 6:
//     console.log("30-kun");
//     break;
//   case 7:
//     console.log("30-kun");
//     break;
//   case 8:
//     console.log("30-kun");
//     break;
//   case 9:
//     console.log("30-kun");
//     break;
//   case 10:
//     console.log("30-kun");
//     break;
//   case 11:
//     console.log("30-kun");
//     break;
//   case 12:
//     console.log("30-kun");
//     break;
//   default:
//     console.log("Bir yilda 12 oy bor, 12 gacha son kiriting");
// }

// function getCase(string) {
//   let str = ''
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toLowerCase()) {
//       str += string[i].toUpperCase();
//     }
//     if (string[i] === string[i].toUpperCase()) {
//       str += string[i].toLowerCase();
//     }
//   }
//   return str
// }

// console.log(getCase("WeBRaiN"));

// var str = "WebBRaiN".split("");
// const a = str.map((value) => {
//   if (value === value.toLowerCase()) {
//     return value.toUpperCase();
//   }
//   if (value === value.toUpperCase()) {
//     return value.toLowerCase();
//   }
// });
// console.log(a.join(""));

// let str = 'XasAN'
// let str2 = 'XUsAN'
// let obshiy = str.concat(str2)
// console.log(
//   obshiy.match(/[A-Z]/g).join("")
// );

// let string = "Webbrain Abdulloh Academy AAaa AAAaaa";
// let count = 0;
// for (let i = 0; i < string.length; i++) {
//   if (string[i].match(/a/ig)) {
//     count++;
//   }
// }
// console.log(`A harfidan ${count}-ta bor`);

// for (let i = 1; i <= 10; i++) {
//   if (i%2===0) {
//     console.log(i);
//   }
// }

// do while , while = esa

let number = 5;

// birinchi tekshiradi , agar tog'ri kelsa keyin amal bajaradi
while (number < 5) { //4<5 true
  number++; //5 
  console.log(number , 'while');
}


// birnichi amalni bajarib keyin tekshiradi
do { //5
  number++; //6
  console.log(number, 'do-while');
} while (number < 5);

// do => qil
// while => esa