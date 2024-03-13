const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const a = Number(input);

if(a % 3 === 0) {
    console.log('YES');
} else {
    console.log('NO');
}

if(a % 5 === 0) {
    console.log('YES');
} else {
    console.log('NO');
}