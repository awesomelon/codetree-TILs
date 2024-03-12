const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [fix, xxxx, yyyy] = input.split('-');
console.log(`${fix}-${yyyy}-${xxxx}`);