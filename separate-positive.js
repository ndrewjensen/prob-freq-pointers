"use strict";

//two pointers
//find negative left value, find positive right value, switch them
//move in with both pointers
//return array

/** pass in an array of integers
 * mutate array:
 * move positive integers to left of array and negs to right
 * return array (not necessarily sorted)
 */

function separatePositive(integers) {
  let left = 0;
  let right = integers.length - 1;

  while (left < right) {
    console.log(`left is ${left} and ${integers[left]} and right is ${right} and ${integers[right]}`)
    if (integers[left] > 0) left ++;
    if (integers[right] < 0 ) right --;
    if (integers[left] < 0 && integers[right] > 0) {
      [integers[left],integers[right]] = [integers[right],integers[left]];
      left ++;
      right --;
    }
  }
  return integers;
}

