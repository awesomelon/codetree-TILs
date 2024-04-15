const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const ft = 30.48;
const mi = 160934;

log(`9.2ft = ${(ft * 9.2).toFixed(1)}cm`);
log(`1.3mi = ${(mi * 1.3).toFixed(1)}cm`);