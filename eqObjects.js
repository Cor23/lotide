const failEmoji = String.fromCodePoint(0x1F534, 0x1F534, 0x1F534);
const passEmoji = String.fromCodePoint(0x1F7E2, 0x1F7E2, 0x1F7E2);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//--------------------------------------------------------//

// two objects are equal when:
// They have the same number of keys
// Compare length of both arrays return false if not equal
//The value for each key in one object is the same as the value for that same key in the other object

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const abc = {a: "1", b: "2", c: "3"};

const eqObjects = function(object1, object2) {
  let lengthObjOne = Object.keys(object1).length;
  let lengthObjTwo = Object.keys(object2).length;
  
  if(lengthObjOne === lengthObjTwo) {      //check length of both objects return false if not equal
    return Object.keys(object1).every(     //for every key in object1
      key => object2.hasOwnProperty(key)   //hasOwnProperty checks object1 keys match object2 keys
      && object1[key] === object2[key]);   //and if values of corresponding keys match return true
  } else {
    return false;
  }

};


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), true);

