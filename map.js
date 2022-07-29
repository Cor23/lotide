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

//Our map function will take in two arguments:
//An array to map
//A callback function
//The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const types = ['for', 'for/in', 'for/of', 'while', 'do/while'];

const map = function(array, callBack) {
  const results = [];
  for(let item of array) {
    results.push(callBack(item));
  }
  return results;
}

const result1 = map(words, word => word[0]);
console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]))
console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'n', 't' ]))

const timesTen = map(numbers, number => number * 10);
console.log(assertArraysEqual(map(numbers, number => number * 10), [10, 20, 30, 40, 50, 60, 70, 80, 90]));
console.log(assertArraysEqual(map(numbers, number => number * 10), [10, 20, 30, 40, 50, 69, 70, 80, 90]));

const loopIt = map(types, type => type + ' Loop');
console.log(assertArraysEqual(map(types, type => type + ' Loop'), ['for Loop', 'for/in Loop', 'for/of Loop', 'while Loop', 'do/while Loop']));
console.log(assertArraysEqual(map(types, type => type + ' Loop'), ['for Loop','for/in Loop','for/of Loop','while/do Loop','do/while Loop']));