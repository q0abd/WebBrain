let str = "Assalamu aLekum Juma muboLAJKHJS rak d";
let trimStr = str.trim();
let count = 1;
let counter = 0;
for (let i = 0; i < trimStr.length; i++) {
  if (trimStr[i] === " ") {
    count++;
  }
  if (trimStr[i] === trimStr[i].toUpperCase().trim()) {
    counter++;
  }
}
console.log(count);
console.log(counter);
