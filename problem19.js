let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let calc=1;
for(let i=1; i<=n; i++){
    calc=calc*i;
}
console.log(calc);