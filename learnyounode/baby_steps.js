var args = process.argv,
    sum  = 0;
for (var i = 2; i < args.length; i++) {
  sum = sum + Number(args[i]);
};

console.log(sum);
