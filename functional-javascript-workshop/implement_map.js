module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (pre, current) {
    pre.push(fn(current));
    return pre;
  }, []);
}
