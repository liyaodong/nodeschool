module.exports = function(namespace) {
  return function () {
    var cl = console.log.bind(console, [namespace].concat(Array.prototype.slice.call(arguments)).join(' '));
    cl();
  }
}
