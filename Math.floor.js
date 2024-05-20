console.log(Math.floor(5.6)); //5
console.log(Math.floor(5.1)); //5
console.log(Math.floor(-8.2)); //-9
console.log(Math.floor(-8.8)); //-9

function floor(num) {
  return num - (num % 1) + (num < 0 ? -1 : 0);
}
console.log(floor(5.6)); //5
console.log(floor(5.1)); //5
console.log(floor(-8.2)); //-9
console.log(floor(-8.8)); //-9
