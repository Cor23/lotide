const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});