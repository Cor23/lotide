const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letterIndex = sentence[i]; // light
    if (letterIndex === ' ') continue;
    if (!results[letterIndex]) {
      results[letterIndex] = [];
    }
    results[letterIndex].push(i);
  }
  return results;
};

module.exports = letterPositions;