let sample_input = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (sample_input.trim()).split("\n").map(Number);
const f = function (a, b) {
    return b - a
}
numbers.sort(f);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);