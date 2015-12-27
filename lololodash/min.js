var _ = require('lodash');

var worker = function (collection) {
  var result = { hot: [], warm: []};
  var compare = n => n > 19;

  _.forEach(collection, (x, city)=> {
    if (_.every(x, compare)) result.hot.push(city);
    else if (_.some(x, compare)) result.warm.push(city);
  });

  return result;
};

module.exports = worker;
