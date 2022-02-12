// let a = [
//   { x: 3, y: 2 },
//   { x: 2, y: 3 },
//   { x: 3, y: 4 },
//   { x: 3, y: 2 },
// ];
// let dubl = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i].x === a[0].x && a[i].y === a[0].y) {
//     
// }
// }dubl.push(a[i]);
// console.log(dubl);



// const humanReadable = (inputSeconds) => {
//   const hours = Math.trunc(inputSeconds / 3600);
//   const minutes = Math.trunc((inputSeconds % 3600) / 60);
//   const seconds = Math.trunc(((inputSeconds % 3600) / 60) % 60);

//   return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
//     2,
//     "0"
//   )}:${String(seconds).padStart(2, "0")}`;
// };

// console.log(humanReadable());

// const humanReadable = (seconds) => {
//     const round = (x) => (x < 10 ? `0${x}` : `${x}`);

//     const hours = parseInt(seconds / (60 * 60));
//     const min = parseInt((seconds / 60) % 60);
//     const sec = seconds % 60;

//     return [hours, min, sec].map(round).join(':');
//   };
//   console.log(humanReadable(5555));


// let number = 6;
// console.log(number ** 0.5);
