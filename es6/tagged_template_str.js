// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
//
// function html(literals, ...substitutions) {
//   var rule = [
//     {
//       "'": '&apos'
//     }, {
//       '"': '&quot'
//     }, {
//       '<': '&lt'
//     }, {
//       '>': '&gt'
//     }, {
//       '&': '&amp'
//     }
//   ];
//
//   var replace = (str) => {
//     return rule.map((ele) => {
//       var keyName = Object.keys(ele);
//       return keyName === str ? ele[keyName] : str;
//     });
//   };
//
//   return substitutions.reduce((pre, str, index) => {
//     return pre + literals[index] + replace(str);
//   });
// }
