let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).split("\n");

let a, b, c = 0;
for (let i = 0; i < n; i++ ) {
    [a,b,c] = numbers[i].split(' ');

    if (a + b < 16){
        console.log("YES");
    }else{
        console.log("NO");
    }
}