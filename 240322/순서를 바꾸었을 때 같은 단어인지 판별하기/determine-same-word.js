const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split('\n');

if([...a].sort().join('') === [...b].sort().join('')) {
    console.log('Yes');
} else {
    console.log('No');
}