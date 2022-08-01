const failEmoji = String.fromCodePoint(0x1F534, 0x1F534, 0x1F534);
const passEmoji = String.fromCodePoint(0x1F7E2, 0x1F7E2, 0x1F7E2);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//----------------------------------------------------------------//

//Implement the function findKey
//takes in an object and a callback
//scan the object and return the first key for which the callback returns a truthy value
//If no key is found, return undefined

const findKey = function(object, callback) {

  for (let key in object) {
    const objectKeyValue = object[key];
    const callBackAnswer = callback(objectKeyValue);
    if (callBackAnswer) {
      return key;
    }
  }
  //for key in object
  //get value and input into callback function callback returns true or false
  //if true return key
  //if false continue iteration
  return undefined;
};

const dictionary = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(dictionary, x => x.stars === 2), "noma");
assertEqual(findKey(dictionary, x => x.stars === 3), "Akaleri");
assertEqual(findKey(dictionary, x => x.stars !== 3), "Akelarre");
assertEqual(findKey(dictionary, x => x.stars !== 3), "Blue Hill");