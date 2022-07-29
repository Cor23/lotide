const failEmoji = String.fromCodePoint(0x1F534, 0x1F534, 0x1F534);
const passEmoji = String.fromCodePoint(0x1F7E2, 0x1F7E2, 0x1F7E2);

const eqArrays = function(inputOne, inputTwo) {
  for(let i = 0; i < inputOne.length; i++) {
    if(inputOne[i] !== inputTwo[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(inputOne, inputTwo) {
  if(!eqArrays(inputOne, inputTwo)) {
    console.log(`${failEmoji} Assertion Failed: ${inputOne} !== ${inputTwo}`)
  } else if(eqArrays(inputOne, inputTwo)) {
    console.log(`${passEmoji} Assertion Passed: ${inputOne} === ${inputTwo}`)
  }
};

//implementing a function takeUntil.
//take in two parameters The array to work with, The callback
//will return a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.
//the callback should only be provided one value: The item in the array.

//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  let output = [];
  for(let element of array) {
    if(!callback(element)) {
      output.push(element)
    } else {
      return output;
    } 
  }
}

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]))

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log(assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]))