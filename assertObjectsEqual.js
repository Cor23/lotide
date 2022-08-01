const failEmoji = String.fromCodePoint(0x1F534, 0x1F534, 0x1F534);
const passEmoji = String.fromCodePoint(0x1F7E2, 0x1F7E2, 0x1F7E2);

const eqArrays = function(inputOne, inputTwo) {
  for (let i = 0; i < inputOne.length; i++) {
    if (inputOne[i] !== inputTwo[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function (object1, object2) {        //input cd and dc into
  const objectOneKeysArray = Object.keys(object1);    //["c", "d"]
  const objectTwoKeysArray = Object.keys(object2);    //["d", "c"]
  let lengthObjOne = objectOneKeysArray.length;       // 2
  let lengthObjTwo = objectTwoKeysArray.length;       // 2

  if (lengthObjOne === lengthObjTwo) {       // 2 === 2 true
    return objectOneKeysArray.every(       // every loop passes key into predicate function
      key => { //c //d
        if (!object2.hasOwnProperty(key)) {  // false // false
          return false;
        }
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // c: "1" false  // d: ["2", 3] true && d: ["2", 3] true
          return eqArrays(object1[key], object2[key]);
        }
        return object1[key] === object2[key]
      })   // c: '1' === c: '1' true
  } else {
    return false;
  }

};

///---------------------------------------------------------

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`${passEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "2", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);