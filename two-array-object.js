"use strict";

/**
 * create an object with the keys coming from one array and the values coming from a second
 * if more keys than values, fill extra keys with null
 * if more values than keys, ignore them
 */

//create empty Object
//for loop through array of keys (use i index) and push keyvalues into object
//check array lengths
//use conditional to add nulls to extra keys if key array is longer
//

// add whatever parameters you deem necessary & write docstring
function twoArrayObject(keys, values) {

  let obj = {};

  for (let i=0; i<keys.length; i++) {
    values[i]?
    obj[keys[i]] = values[i]:
    obj[keys[i]] = null;
  }
  return obj;
}
