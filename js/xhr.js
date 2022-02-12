const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    //yangi XHR request ochilishi
    const xhr = new XMLHttpRequest();

    //onload GET ga taluqli , chunki biz ma'lumotni 'GET' methodi orqali jonatamiz
    xhr.open(method, url);

    //xhr ni string typyidan json formatiga otqizish
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    //XHRni onload orqali biz webbrowserga jonatamiz
    xhr.onload = () => {
      //errorni ozimizcha shunaqa korinishda yasasak ham boleradi
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    //error bajarilishi uchun code
    xhr.onerror = () => {
      reject(xhr.response);
    };

    //agar XHR malumotini send() qilinmasa demak u ishamaydi
    //send qilish esdan chiqmasin
    xhr.send(JSON.stringify(body));
  });
}

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const body = {
  name: "Abdulloh",
  age: 18,
};

sendRequest("POST", requestURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
