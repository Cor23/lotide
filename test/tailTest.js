const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it ("returns 'Labs,Hello' for ['Lighthouse', 'Labs', 'Hello']", () => {
    assert.deepEqual(tail(['Lighthouse', 'Labs', 'Hello']), 'Labs,Hello')
  });

  it ("returns 'Lighthouse,Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 'Lighthouse,Labs')
  });

});