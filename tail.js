const tail = function(array) {
  array = array.slice(1);
  return array.join()
};

module.exports = tail;