let n = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
function numbers(n){
   return n.split("").reverse().join("");
 }
console.log(numbers(n));