console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(literals, ...substitutions) {
  var rule = [
    {
      "'": '&apos;'
    }, {
      '"': '&quot;'
    }, {
      '<': '&lt;'
    }, {
      '>': '&gt;'
    }, {
      '&': '&amp;'
    }
  ];
  var replaced = substitutions.map((str) => {
    for (let i = 0; i < rule.length; i++ ){
      let name = Object.keys(rule[i]);
      if(new RegExp(name).test(str)) {
        str = str.replace(name, rule[i][name]);
        break;
      }
    }
    return str;
  });

  var str = replaced.reduce((pre, cur, index) => {
    return pre + literals[index] + replaced[index];
  }, '');

  return str + literals[literals.length - 1];
}
