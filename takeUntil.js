//implementing a function takeUntil.
//take in two parameters The array to work with, The callback
//will return a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.
//the callback should only be provided one value: The item in the array.
//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let output = [];
  for(let element of array) {
    if(!callback(element)) {
      output.push(element)
    } else {
      return output;
    } 
  }
};

module.exports = takeUntil;