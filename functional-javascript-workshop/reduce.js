function countWords(inputWords) {
  return inputWords.reduce(function (prev, current, index, array) {
    prev[current] = ++prev[current] || 1;
    return prev;
  }, {});
}

module.exports = countWords;
