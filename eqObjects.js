const eqArrays = require('./eqArrays');

// two objects are equal when:
// They have the same number of keys
// Compare length of both arrays return false if not equal
// The value for each key in one object is the same as the value for that same key in the other object

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

module.exports = eqObjects;
