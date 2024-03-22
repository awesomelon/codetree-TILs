const fs = require("fs");
const [id, level] = fs.readFileSync(0).toString().trim().split(' ');

class GameAccount {
    id;
    level;
    constructor(id = 'codetree', level = 10) {
        this.id = id;
        this.level = level;
    }
}

const account1 = new GameAccount();
const account2 = new GameAccount(id, level);

console.log(`user ${account1.id} lv ${account1.level}`);
console.log(`user ${account2.id} lv ${account2.level}`);