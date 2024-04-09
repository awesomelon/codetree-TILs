const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const classes = input[1].split(' ').map(Number);
const [a, b] = input[2].split(' ').map(Number);

const ac = classes[a - 1];
const bc = classes[b - 1];

log(((ac + bc) / 2).toFixed(1))