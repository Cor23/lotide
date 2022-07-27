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

//Implement middle which will take in an array and return the middle-most element(s) of the given array.

//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

//For arrays with one or two elements, there is no middle. Return an empty array.

//For arrays with odd number of elements, an array containing a single middle element should be returned.

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

const middle = function() {

}

middle([1, 2, 3, 4, 5]) // => [3]