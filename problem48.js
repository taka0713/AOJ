let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).split("\n").map(Number);

for (let i = 0; i < numbers.length; i++ ) {
    if (0 <= numbers[i] && numbers[i] <=48.00 ) {
        console.log("light fly");
    }else if (48.01 <= numbers[i] && numbers[i] <= 51.00){
        console.log("fly");
    }else if (51.01 <= numbers[i] && numbers[i] <= 54.00){
        console.log("bantam");
    }else if (54.01 <= numbers[i] && numbers[i] <= 57.00){
        console.log("feather");
    }else if (57.01 <= numbers[i] && numbers[i] <= 60.00){
        console.log("light");
    }else if (60.01 <= numbers[i] && numbers[i] <= 64.00){
        console.log("light welter");
    }else if (64.01 <= numbers[i] && numbers[i] <= 69.00){
        console.log("welter");
    }else if (69.01 <= numbers[i] && numbers[i] <= 75.00){
        console.log("light middle");
    }else if (75.01 <= numbers[i] && numbers[i] <= 81.00){
        console.log("middle");
    }else if (81.01 <= numbers[i] && numbers[i] <= 91.00){
        console.log("light heavy");
    }else{
        console.log("heavy");
    }
}