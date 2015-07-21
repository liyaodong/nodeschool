var fn = require(process.argv[2]);
var test = require('tape');

test('fn', function (t) {
  t.plan(5);
  fn(5, function () {
    t.pass('callback called');
  });
});

/*
test pass: t.plan(n) should trigger n times t.pass
*/
