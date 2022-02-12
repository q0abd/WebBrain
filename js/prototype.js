const person = new Object({
  name: "Abdurrohman",
  age: 22,
});

const person = {
  name:'Abdulloh',
  age:18
};


const abd = [1,2,3,4,5]

Array.prototype.plusItems = function(n){
  return this.map(function(i){
    return i+n
  })
}

console.log(abd.plusItems(5));