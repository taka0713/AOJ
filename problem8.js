let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).split("\n").map(Number);

for(n = 0 ; n < numbers.length; n++){
    let c = 0;
        for(i = 0 ; i <= 9; i++){
            for(j = 0 ; j <= 9; j++){
                for(k = 0 ; k <= 9; k++){
                    for(l = 0 ; l <= 9; l++){
                        if(i + j + k + l === numbers[n]){
                            c++
                        }
                    }
                }
            }
        }
        console.log(c);
}