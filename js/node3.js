// const getDataHour = (seconds) => {
//   const round = (x) => (x < 10 ? `0${x}` : `${x}`);
//   const hours = parseInt(seconds / (60 * 60));
//   const min = parseInt((seconds / 60) % 60);
//   const sec = seconds % 60;

//   return [hours, min, sec].map(round).join(":");
// };

// console.log(getDataHour(25));

let a = [
  { x: 3, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 4 },
  { x: 3, y: 2 },
];
let dubl = [];

for (let i = 0; i < array.length; i++) {
  if (a[i].x === a[0].x && a[i].y === a[0].y) {
    dubl.push(a[i]);
  }
}
console.log(a);
