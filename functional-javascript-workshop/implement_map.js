module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function (pre, current, index, arr) {
    pre.push(fn.call(thisArg, current, index, arr));
    return pre;
  }, []);
}
