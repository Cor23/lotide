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
//-----------------------^ Test Code ^------------------------//

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letterIndex = sentence[i]; // light
    if (letterIndex === ' ') continue;
    if (!results[letterIndex]) {
      results[letterIndex] = [];
    }
    results[letterIndex].push(i);
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

// const spread = [3,4,6] // [3,4,6,7]
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// spread is immutable if you want as whenever you add to the array you are creating a new array eg. after doing
// the below. spread will still be [3,4,6] but you will have a new array with [3,4,6,7]
// [...spread, 7]
// [7, ...spread]
// ----
// if (!obj.key) {} // undefined = falsy
// if (obj.key == null) // obj.key === 
// ndefined || obj.key ===/null/ if (!Array.isArray(obj.key)) {
//   obj.key = []
// }
// mutate as in the array is still the same, we just change it by adding 7 to it
// obj.key.push(7)



// console.log(spread)