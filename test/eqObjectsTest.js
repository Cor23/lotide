const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const abc = {a: "1", b: "2", c: "3"};

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

eqObjects(cd, dc);
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3] };

assertEqual(eqObjects(cd, cd2), true);