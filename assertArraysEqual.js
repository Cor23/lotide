const eqArrays = require('./eqArrays');

// Implement assertArraysEqual 
// will take in two arrays
// console.log an appropriate message to the console.
// Your assertion function should ideally leverage eqArrays function
// The message will be similar to that of assertEqual.
// Instead of doing a simple === check though, eqArrays function for array comparison.

const failEmoji = String.fromCodePoint(0x1F534, 0x1F534, 0x1F534);
const passEmoji = String.fromCodePoint(0x1F7E2, 0x1F7E2, 0x1F7E2);

const assertArraysEqual = function(inputOne, inputTwo) {
  if(!eqArrays(inputOne, inputTwo)) {
    console.log(`${failEmoji} Assertion Failed: ${inputOne} !== ${inputTwo}`)
  } else if(eqArrays(inputOne, inputTwo)) {
    console.log(`${passEmoji} Assertion Passed: ${inputOne} === ${inputTwo}`)
  }
};

module.exports = assertArraysEqual;