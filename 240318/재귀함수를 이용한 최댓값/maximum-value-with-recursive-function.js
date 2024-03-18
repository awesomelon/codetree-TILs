const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const array = input[1].split(' ').map(Number);

function getMax(a, search, maxIndex) {
    if(search === a.length - 1) {
        return a[maxIndex];
    }

    if(a[search] > a[maxIndex]) {
        return getMax(a, search + 1, search);
    }

    return getMax(a, search + 1, maxIndex);
}


console.log(getMax(array, 0, 0));