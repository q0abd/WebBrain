// let obj = {
// student1: [50, 50],
// student2: [50, 60],
// student3: [50, 70],
// };
// let valuees = Object.values(obj);
// let b = valuees[0].reduce((item, value) => {
// return value + item;
// }, 0);
// console.log(b / valuees.length);
//
// console.log();
//
//

// Number.isInteger()?console.log(true):console.log(false)

var str = " a ss  alamu q alekum ";
// var a = str.trim(' ')
// console.log(a);

// var log = "";
// let count = 0
// for (let i = 0; i < str.length; i++) {
//     if (str[i]==='a') {
//         count++
//     }
// }
// console.log(count);

// for (let i = 0; i < str.length; i++) {
//     (log += str[i].trim())
// }
// console.log(log);

// console.log(a.match(/ /g).length+1);
////////////////
// console.log(str.split(' ').length);

var str2 = "valekum salom ";

// console.log(str.slice(1,4)); //boshlanishi , tugashi
// console.log(str.indexOf('a')) //topilishi kerak bolgan item
// console.log(str.split(' ').join()); //string arrayga otqazish
// console.log(str.includes('q')); //qidirmoq | bolsa true | yoqsa false
// console.log(str.join); //arraydan stringa otqazadi
// console.log(str.toLowerCase()); //kichik harfda qaytaradi
// console.log(str.charAt(9)); //nechanchi index nima turganini qaytaradi
// console.log(str.toUpperCase());//katta harflarda qaytaradi
// console.log(str.substring(2,5)); //boshlangich index , va tugallanishi
// console.log(str.substr(2,5)); //boshlanishi index , tugallanishi length
// console.log(str2.endsWith('lom')); //oxiri shu bilan tugaydimi?
// console.log(str2.startsWith('va')); //boshi shu bilan boshlanadimi?
// console.log(str2.search('salom')); //qidiradi | nechanchi indexdan boshlanganini qaytaradi
// console.log(str2.replaceAll('m','Q')); // birinchi index | ikkinchisi nimani ozgartirishi | va bunda hammasini almashtiradi
// console.log(str2.replace('m','Q')); //birinchi index | ikkinchisi nimani ozgartirishi | bunda eng birnichi chiqadiganini almashtiradi
// console.log(str.concat(str2)); //stringa string qoshish
// console.log(str2.repeat(10)); //qaytaradi | son oladi
// console.log(str2.charCodeAt(0));
// console.log(String.fromCharCode(97))
var str = "salaom";

// console.log(str.match(/a/g));
// console.log(str.replaceAll(`a`, "q"));

// let a = 70;

// function getName() {
//   let a = 60;
//   console.log(a);
// }

// getName();

function checklength(string1, string2) {
  if (string1.includes("c", 2) === string2.includes("c", 0)) {
    console.log(string1);
  } else {
    console.log(string1 + string2);
  }
}
checklength("abc", "cde");
function checklength(string1, string2) {
  if (string1.includes("c", 2) === string2.includes("c", 0)) {
    console.log(string1);
  } else {
    console.log(string1 + string2);
  }
}
checklength("abc", "cde");
