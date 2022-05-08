let n = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
let money = 100000;

for(i = 0 ; i < n ; i++){
    money = money * 1.05;
    money = Math.ceil( money / 1000 )*1000;
}
console.log(money);