"use strict"
// add whatever parameters you deem necessary & write docstring


/**
receives array and a target number, checks if array contains a pair that averages to target
*/

//check if array is empty, return false
//two pointer method


function averagePair(nums,target) {
  if(nums.length === 0) return false;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const average = (nums[left] + nums[right]) / 2;
    if (target === average) {
      return true;
    } else if (average < target) {
    left ++;
  } else {
    right --;
  }

  }
  return false
}

