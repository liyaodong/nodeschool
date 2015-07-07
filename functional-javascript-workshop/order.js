function repeat(operation, num) {
  var i = 0;
  while(i < num) {
    i++;
    operation();
  }
}

// Do not remove the line below
module.exports = repeat;
