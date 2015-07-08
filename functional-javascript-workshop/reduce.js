function countWords(inputWords) {
  return inputWords.reduce(function (prev, current, index, array) {
    if(prev.hasOwnProperty(current)) {
      prev[current] = prev[current] + 1;
    } else {
      prev[current] = 1;
    }
    return prev;
  }, {});
}

module.exports = countWords;
