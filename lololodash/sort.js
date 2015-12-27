var _ = require('lodash');

var worker = function (arr) {
  return _.sortBy(arr, function (n) {
    return -n.quantity;
  });
};

module.exports = worker;
