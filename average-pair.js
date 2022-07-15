"use strict"
// add whatever parameters you deem necessary & write docstring


/**
receives array and a target number, checks if array contains a pair that averages to target
*/

//check if array is empty, return false
//make frequency counter
//check if target = key, count should be 2 because target is average
//check counter object, if (target * 2) - current num is a key in counter, return true


function averagePair(nums,target) {
  if(nums.length === 0) return false;
  let counter = getFrequencyCounter(nums);

  for(let num in counter){
    if(Number(num) === target && counter[num] > 1){
      return true;
    } else if(counter[2 * target - num]){
      return true;
    }
  }
  return false;
}

/** accept str/arr and return frequency counter object*/
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}