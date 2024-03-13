const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);


if(n >= 3000) {
    console.log('book');
} else if( n >= 1000 && n < 3000) {
    console.log('mask');
} else {
    console.log('no');
}