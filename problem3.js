let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).split("\n");
n = numbers.shift();

let a, b, c = 0;
for (let i = 0; i < n; i++ ) {
    [a,b,c] = numbers[i].split(' ').sort();

    if (a * a + b * b === c * c) {
        console.log("YES");
    }else{
        console.log("NO");
    }
}