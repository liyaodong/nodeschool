function duckCount() {
  return [].reduce.call(arguments, function (pre, current) {
    return Object.prototype.hasOwnProperty.call(current, 'quack') ? ++pre : pre;
  }, 0);
}

module.exports = duckCount
