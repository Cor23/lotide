//Implement without which will return a subset of a given array, removing unwanted elements.
//This function should take in a source array and a itemsToRemove array
//It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  let output = [];
  let removeThis;
  for(let i = 0; i < source.length; i++) {
    if(source[i] === itemsToRemove[i]) {
      removeThis = itemsToRemove[i];
    }
    // console.log('remove this: ', removeThis)
  }
  for(let j = 0; j < source.length; j++) {
    if(source[j] !== removeThis) {
      output.push(source[j])
    }
  }
  return output;
};

module.exports = without;