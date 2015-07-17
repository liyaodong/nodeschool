function Spy(target, method) {
  var spy = { count: 0 };
  var newFun = target[method];
  target[method] = function () {
    spy.count++;
    return newFun.apply(target, arguments);
  };
  return spy;
}

module.exports = Spy;
