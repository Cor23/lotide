const assertObjectsEqual = require('../assertObjectsEqual');

const cd = { c: "2", d: ["2", 3] };
const dc = { c: "2", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);