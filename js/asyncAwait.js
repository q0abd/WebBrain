const delayTimeOut = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};
// console.warn('Promise is going on ...')
// delayTimeOut(2000).then(()=>console.log('Promise is done!'))
const url = "https://jsonplaceholder.typicode.com/todos";

// function getFetch() {
//   console.log("Fetching is started...");
//   return delayTimeOut(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }
// getFetch()
//   .then((data) => console.log("Data:", data))
//   .catch((error) => console.log(error));

// async function asyncFunc(){
//     console.log('Fetching is started...');
//     try{
//         await delayTimeOut(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data:',data);
//     }catch(e){
//         console.log(e);
//     }finally{
//         console.warn('All things is done finally');
//     }
// }
// asyncFunc()

