const fs = require('fs');
const[n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

for(let i = 0; i < n; i++) {
    console.log('1'.repeat(m));
}