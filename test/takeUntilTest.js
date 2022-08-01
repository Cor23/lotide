const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]))

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log(assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]))