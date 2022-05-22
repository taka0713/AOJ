let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).split("\n").map(Number);

numbers.sort(function(a,b){
    return b - a;
});
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);