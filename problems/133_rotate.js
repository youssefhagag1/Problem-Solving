function rotate(arr, k) {
  k = k % arr.length;

  function reverse(left, right) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  reverse(0, arr.length - 1);
  reverse(0, k - 1);
  reverse(k, arr.length - 1);

  return arr;
}

console.log(rotate([ 1 , 2 , 3 , 4 , 5 , 6 , 7] , 3))

1 2 3 4 5 6 7 , 3 => 5 6 7 1 2 3 4

7 6 5 4 3 2 1 => 5 6 7 4 3 2 1

