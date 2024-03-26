const fs = require("fs");
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const milliseconds = new Date(`2011-${m2}-${d2}`).getTime() - new Date(`2011-${m1}-${d1}`).getTime();
console.log((milliseconds / 1000 / 60 / 60 / 24) + 1);