const fs = require("fs");
const [N, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(N.toString(B))