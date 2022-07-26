const failEmoji = String.fromCodePoint(0x1F534, 0x1F534, 0x1F534);
const passEmoji = String.fromCodePoint(0x1F7E2, 0x1F7E2, 0x1F7E2);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//------------ code above is a check for expected outcome --------------//

const head = function(array) {
  switch (array) {
  case undefined:
    return undefined;
  default:
    return array[0];
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');