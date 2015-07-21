var feedCat = require(process.argv[2]);
var test = require('tape');

test('feedCat', function (t) {
  t.plan(2);
  t.equal(feedCat('food'), 'yum');
  t.throws(feedCat.bind(null, 'chocolate'));
});

/*
  Why `bind` to throws but not bind equal ?
  Because throws first params need a function/RegExp,
  But feedCat('chocolate') is a function result.
  bind return a new function with repaced this arg.
  so , if some fun like this :

  function () {
    doSomething('foo');
  }

  you can write with functional method like this:
  doSomething.bind(null, 'foo')
*/
