// const requestURL = "https://jsonplaceholder.typicode.com/users";

// function sendRequest(method, url, body = null) {
//   const header = {
//     "Content-Type": "application/json",
//   };

//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: header,
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       return response.json().then((err) => {
//         const e = new Error("Something is wrong!");
//         e.data = err;
//         throw e;
//       });
//     }
//   });

// fetch orqali GET qilish
// return fetch(url).then((response) => {
//   return response.json();
// });
// }

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const body = {
//   name: "Abdulloh",
//   age: 18,
// };

// sendRequest("POST", requestURL, body)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const requestURL = "https://jsonplaceholder.typicode.com/users";
function getFetch(method, url, body = null) {
  const header = {
    "Content-Type": "application/json",
  };
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: header,
  }).then((res) => {
    return res.json();
  });
}

// getFetch("GET", requestURL)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

const body = {
  name: "Abdulloh",
  age: 18,
};

getFetch("POST", requestURL, body)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
