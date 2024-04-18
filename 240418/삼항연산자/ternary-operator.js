const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const score = Number(input);

log(score === 100 ? 'pass': 'failure');