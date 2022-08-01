const head = function(array) {
  switch (array) {
  case undefined:
    return undefined;
  default:
    return array[0];
  }
};

module.exports = head;