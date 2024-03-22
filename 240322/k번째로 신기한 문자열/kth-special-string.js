const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [condition, ...words] = input;
const [n, k, t] = condition.split(' ');

const filterWords = words.filter(v => v.indexOf(t) === 0).sort();

console.log(filterWords[k - 1]);