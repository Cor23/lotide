const failEmoji = String.fromCodePoint(0x1F534, 0x1F534, 0x1F534);
const passEmoji = String.fromCodePoint(0x1F7E2, 0x1F7E2, 0x1F7E2);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};
//----------------------------------------------------------------------//

//The function should take in a sentence(as a string)
//return a count of each of the letters in that sentence
//For example, countLetters('LHL') return results indicating that L appears twice, and H once. {l: 2, h: 1}
//Tips: You can use for...of loops with strings.
//output: {L: 2, H: 3}


let countLetters = function(string) {
  let output = {};
  for (let letter of string) {
    if (letter !== ' ') {
      output[letter] = 0;
    }
  }
  for (let letter of string) {
    if (letter !== ' ') {
      output[letter] += 1;
    }
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));