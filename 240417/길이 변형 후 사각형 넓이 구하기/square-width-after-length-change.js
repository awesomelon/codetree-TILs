const fs = require("fs");
const log = console.log;
let [width, height] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

width += 8;
height *= 3;

log(width);
log(height);
log(width * height);