const fs = require("fs");
const agents = fs.readFileSync(0).toString().trim().split('\n');

class Agent {
    code;
    score;

    constructor(code, score) {
        this.code = code;
        this.score = parseInt(score);
    }
}

const result = agents
    .map(agent => new Agent(...agent.split(' ')))
    .sort((a,b) => a.score - b.score)[0];

console.log(`${result.code} ${result.score}`);