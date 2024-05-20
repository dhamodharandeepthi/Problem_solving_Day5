function binarySearch(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(start, end, arr[mid], mid, searchValue);
    if (arr[mid] === searchValue) {
      return mid;
    }
    if (arr[mid] < searchValue) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); //4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); //8
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //2
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)); //0

//Time complexity O(logn) because log basex y=z =>  y=x**z

/*
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))
1st iteration
start=0
end=8;
arr[mid]=5;
mid=4; return 4
search value=5
-------------------------------------------
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))
four iteration took
start=0 5 7 8
end=8; 8 8 8
arr[mid]=5 7 8 9
mid=4 6 7 8   return 8
search value=9
---------------------------------------------
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
three iteration took
start=0 0 2
end=8 3 2
arr[mid]=5 2 3
mid=4 1 2 return 2
search value=3
-----------------------------------------------
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)); //0
three iteration took
start=0 0 0
end=8 3 0
arr[mid]=5 2 1
mid=4 1 0 return 0
search value=1
*/
