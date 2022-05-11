let n = require('fs').readFileSync('/dev/stdin', 'utf8');
n = (n.trim()).split(" ");
n = n.sort((a, b) => {return b - a;}).join(" ");
console.log(n);