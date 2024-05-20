function linearSearch(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (searchValue === arr[i]) {
      return i;
    }
  }
  return -1;
}
let arr = [2, 5, 6, 9, 7, 4, 3];
let searchValue = 1;

console.log(linearSearch(arr, searchValue)); //3
