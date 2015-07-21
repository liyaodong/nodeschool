var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify test', function (t) {
  t.equal(fancify('Hello'), '~*~Hello~*~', 'Wraps a string in ~*~');
  t.equal(fancify('Hello', true), '~*~HELLO~*~', 'Wraps a string in ~*~ and to uppercase');
  t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'Wraps a string with third params');
  t.end();
});
