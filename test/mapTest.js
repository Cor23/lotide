const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const types = ['for', 'for/in', 'for/of', 'while', 'do/while'];

const result1 = map(words, word => word[0]);
console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]))
console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'n', 't' ]))

const timesTen = map(numbers, number => number * 10);
console.log(assertArraysEqual(map(numbers, number => number * 10), [10, 20, 30, 40, 50, 60, 70, 80, 90]));
console.log(assertArraysEqual(map(numbers, number => number * 10), [10, 20, 30, 40, 50, 69, 70, 80, 90]));

const loopIt = map(types, type => type + ' Loop');
console.log(assertArraysEqual(map(types, type => type + ' Loop'), ['for Loop', 'for/in Loop', 'for/of Loop', 'while Loop', 'do/while Loop']));
console.log(assertArraysEqual(map(types, type => type + ' Loop'), ['for Loop','for/in Loop','for/of Loop','while/do Loop','do/while Loop']));