let n = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(n.split("").reverse().join(""));