var exec = require('child_process').exec;

var nowPwd = process.cwd().split('/').pop();

var cmd = nowPwd + ' ';

process.argv.forEach(function (item, index) {
  if(index > 1) {
    cmd = cmd + item + ' ';
  }
});

exec(cmd, function(error, stdout, stderr) {
  process.stdout.write(stdout);
});
