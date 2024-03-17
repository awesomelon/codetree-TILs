const fs = require('fs');
const [input, target] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const findIndex = (input, target) => {
    return input.indexOf(target);
}

console.log(findIndex(input, target));