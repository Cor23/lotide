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
const eqArrays = function(inputOne, inputTwo) {
  for (let i = 0; i < inputOne.length; i++) {
    if (inputOne[i] !== inputTwo[i]) {
      return false;
    }
  }
  return true;
};
//--------------------------------------------------------//

// two objects are equal when:
// They have the same number of keys
// Compare length of both arrays return false if not equal
//The value for each key in one object is the same as the value for that same key in the other object

const eqObjects = function(object1, object2) {        //input cd and dc into
  const objectOneKeysArray = Object.keys(object1);    //["c", "d"]
  const objectTwoKeysArray = Object.keys(object2);    //["d", "c"]
  let lengthObjOne = objectOneKeysArray.length;       // 2
  let lengthObjTwo = objectTwoKeysArray.length;       // 2
  
  if (lengthObjOne === lengthObjTwo) {       // 2 === 2 true
    return objectOneKeysArray.every(       // every loop passes key into predicate function
      key => { //c //d
        if (!object2.hasOwnProperty(key)){  // false // false
           return false;
          }
          if(Array.isArray(object1[key]) && Array.isArray(object2[key])){ // c: "1" false  // d: ["2", 3] true && d: ["2", 3] true
            return eqArrays(object1[key], object2[key]);
          }
        return object1[key] === object2[key]})   // c: '1' === c: '1' true
          } else {
            return false;
          }

};

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const abc = {a: "1", b: "2", c: "3"};

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

eqObjects(cd, dc);
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3] };

assertEqual(eqObjects(cd, cd2), true);

