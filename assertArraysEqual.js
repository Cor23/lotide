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
  if(eqArrays(inputOne, inputTwo) === false) {
    console.log(`${failEmoji} Assertion Failed: ${inputOne} !== ${inputTwo}`)
  } else if(eqArrays(inputOne, inputTwo) === true) {
    console.log(`${passEmoji} Assertion Passed: ${inputOne} === ${inputTwo}`)
  }
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3]), false)
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 2]), true)

// Implement assertArraysEqual 
// will take in two arrays
// console.log an appropriate message to the console.
// Your assertion function should ideally leverage eqArrays function
//The message will be similar to that of assertEqual.
// Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.