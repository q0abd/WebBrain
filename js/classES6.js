const getData = async (url) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

getData("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.map((value) => {
      console.log({ ...value }.name);
    });
  })
  .catch((rej) => console.log(rej));

// let array = ["9",'3'];
// let a = array.toString().replace(",", "");
// let b = +a + 1;
// console.log(`${b}`.split(""));


// var str = 'WebCOdeACademy';
// var sL = str.length;
// var i = 0;
// var stri = ''
// for (; i < sL; i++) {
//     if (str.charAt(i) === str.charAt(i).toUpperCase()) {
//         stri += str.charAt(i)
//     }
// }

// console.log(stri);


