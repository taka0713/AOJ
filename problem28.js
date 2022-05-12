let n = require('fs').readFileSync('/dev/stdin', 'utf8');
let numbers = (n.trim()).split("\n");
numbers.mode = function () {
    if (this.length === 0){
        throw new Error("配列の長さが0のため最頻値が計算できません");
    }
    let counter = {}
    let nativeValues = {}
    let maxCounter = 0;
    let maxValue = null;

    for (let i = 0; i < this.length; i++) {
        if (!counter[this[i] + "_" + typeof this[i]]) {
            counter[this[i] + "_" + typeof this[i]] = 0;
        }
        counter[this[i] + "_" + typeof this[i]]++;
        nativeValues[this[i] + "_" + typeof this[i]] = this[i];

    }
    for (let j = 0; j < Object.keys(counter).length; j++) {
        key = Object.keys(counter)[j];
        if (counter[key] > maxCounter) {
            maxCounter = counter[key];
            maxValue = nativeValues[key]
        }
    }
    return maxValue

}