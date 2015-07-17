function repeat(operation, num) {
  // 重现重写原来的函数，加上一个 count 功能，然后在 100ms 之后直接 return 防止超时
  // if (num <= 0) return;
  // operation();
  // setTimeout(function () {
  //   return repeat(operation, --num);
  // }, 100);
}
//
// function operation() {
//   var count = 0;
//   for (var i = 0; i < 100; i++) {
//     console.info('ok');
//   }
//   // count how many times this function was called
//   count++;
// }
//
// repeat(operation, 10);

module.exports = repeat;
