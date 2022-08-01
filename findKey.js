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

module.exports = findKey;