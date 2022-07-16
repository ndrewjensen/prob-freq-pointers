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


//FIXME: the while loop is infinite and prevents the test file from checking the other js problems
// function separatePositive(integers) {
//   let left = 0;
//   let right = integers.length - 1;

//   while (left < right) {
//     if (integers[left] < 0 && integers[right > 0]) {
//       [integers[left],integers[right]] = [integers[right],integers[left]];
//     } else if (integers[left] > 0 && integers[right > 0]) {
//       left ++;
//     } else if (integers[left] < 0 && integers[right < 0]) {
//       right --;
//     } else if (integers[left] > 0 && integers[right < 0]) {
//       left ++;
//       right --;
//     }
//   }
//   return integers;
// }
