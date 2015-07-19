module.exports = function average(...nums) {
  var sum = nums.reduce((pre, cur) => pre += cur, 0);
  return sum / nums.length;
};
