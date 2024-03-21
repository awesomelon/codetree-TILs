const fs = require("fs");
const [s, ...array] = fs.readFileSync(0).toString().trim().split('\n');

array.sort().forEach(word => {
    console.log(word);
});