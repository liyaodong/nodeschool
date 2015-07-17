var inputs = process.argv.slice(2);
var result = inputs.map(str => str[0]).reduce((pre, str) => pre + str);

console.log(`[${inputs}] becomes "${result}"`);
