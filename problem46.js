let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).split("\n").map(Number);
let max = numbers.reduce(function(a,b){
    return Math.max(a,b);
  });
let min = numbers.reduce(function(a,b){
    return Math.min(a,b);
  });
  console.log(max-min);