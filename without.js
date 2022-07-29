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

//Implement without which will return a subset of a given array, removing unwanted elements.

//This function should take in a source array and a itemsToRemove array

//It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  let output = [];
  let removeThis;
  for(let i = 0; i < source.length; i++) {
    if(source[i] === itemsToRemove[i]) {
      removeThis = itemsToRemove[i];
    }
    // console.log('remove this: ', removeThis)
  }
  for(let j = 0; j < source.length; j++) {
    if(source[j] !== removeThis) {
      output.push(source[j])
    }
  }
  return output;
}

console.log(without([1, 2, 3], [1]));
console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));

console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);