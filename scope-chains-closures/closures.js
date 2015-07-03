function foo() {
  var bar;
  quux = 3;
  function zip() {
    var quux = 2;
    bar = true;
  };
  return zip;
}
