console.log(Math.ceil(3.1));
console.log(Math.ceil(3.6));
console.log(Math.ceil(-84.1));
console.log(Math.ceil(-56.2));

function ceil(num) {
  return num - (num % 1) + (num < 0 ? 0 : 1);
}

console.log(ceil(3.1));
console.log(ceil(3.6));
console.log(ceil(-84.1));
console.log(ceil(-56.2));
