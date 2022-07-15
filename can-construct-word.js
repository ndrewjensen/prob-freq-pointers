"use strict";

/** accept two strings, determine whether string1 can be made from characters
 * in string 2.
 * return true/false
 */

// psuedo: check if word is empty
//convert both strings to frequency objects (use helper function),
// loop through object 1
// compare key:values,
// if each in obj1 is less than or equal to obj 2, return true



function canConstructWord(word, letters) {

  if (letters.length === 0) return false;

  let wordObj = getFrequencyCounter(word);
  let lettersObj = getFrequencyCounter(letters);

  for (let char in wordObj) {
    if (wordObj[char] > lettersObj[char]) return false;
  }

  return true
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