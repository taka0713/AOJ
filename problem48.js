let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).split("\n").map(Number);

for (let i = 0; i < numbers.length; i++ ) {

    if (0 <= n && n <=48.00 ) {
        console.log("light fly");
    }else if (48.01 <= n && n <= 51.00){
        console.log("fly");
    }else if (51.01 <= n && n <= 54.00){
        console.log("bantam");
    }else if (54.01 <= n && n <= 57.00){
        console.log("feather");
    }else if (57.01 <= n && n <= 60.00){
        console.log("light");
    }else if (60.01 <= n && n <= 64.00){
        console.log("light welter");
    }else if (64.01 <= n && n <= 69.00){
        console.log("welter");
    }else if (69.01 <= n && n <= 75.00){
        console.log("light middle");
    }else if (75.01 <= n && n <= 81.00){
        console.log("middle");
    }else if (81.01 <= n && n <= 91.00){
        console.log("light heavy");
    }else{(91.01 <= n)
        console.log("heavy");
    }
}