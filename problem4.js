let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).split("\n");
n = numbers.length;

let a,b,c,d,e,f = 0;
for(let z = 0; z < n; z ++){
     [a,b,c,d,e,f] = numbers[z].split(' ');
     y=(a*f-d*c)/(e*a-d*b);
     x=(c-b*y)/a;
     console.log(x.toFixed(3)  + ' ' + y.toFixed(3));
}