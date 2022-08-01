const tail = require('../tail');
const assertEqual = require('../assertEqual');

//---Tests for tail.js---//

const result = ["Lighthouse", "Labs", "Hello"];
console.log(assertEqual(tail(result), 'Labs,Hello'))

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(assertEqual(tail(words), 'Lighthouse,Labs'));