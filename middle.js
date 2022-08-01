//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

const middle = function(array) {
  if(array.length <= 2) {
    return [];
  }
  if(array.length === 3) {
    let indexOfMiddle = Math.floor(array.length / 2)
    return [array[indexOfMiddle]]
  }
  if(array.length >= 4 && array.length % 2 === 0) { //EVEN
    let output = [];
    let indexOfMiddle = Math.floor(array.length / 2)
    output.push(array[indexOfMiddle] - 1)
    output.push(array[indexOfMiddle])
    return output
  }
  if(array.length >= 4 && array.length % 2 !== 0) { //ODD
    let indexOfMiddle = Math.floor(array.length / 2)
    return [array[indexOfMiddle]]
  }
  
}

module.exports = middle;