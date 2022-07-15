"use strict"
// add whatever parameters you deem necessary & write docstring

//use frequency counter to count numbers in integer
//compare frequency lists of num1,num2

/** Takes two positive integers, checks if numbers have same frequency, returns true/false*/
function sameFrequency(num1,num2) {
  const num1Counter = frequencyCounter(num1.toString());
  const num2Counter = frequencyCounter(num2.toString());

  if(num1.toString().length !== num2.toString().length) return false;

  for(let num in num1Counter){
    if(num1Counter[num] !== num2Counter[num]) return false;
  }
  return true;
}

function frequencyCounter(items){
  const freqs = {}

  for(let item of items){

    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }
  return freqs;
}