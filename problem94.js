let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).Number();
n = numbers.length;

let a,b = 0;
for(let z = 0; z < n; z ++){
     [a,b] = numbers[z].split(' ');
     x = a * b / 3.305785;
     console.log(x.toFixed(6));
}