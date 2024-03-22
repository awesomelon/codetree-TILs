const fs = require("fs");
const [code, color, time] = fs.readFileSync(0).toString().trim().split(' ');

class Bomb {
    code;
    color;
    time;

    constructor(code, color, time) {
        this.code = code.trim();
        this.color = color.trim();
        this.time = time.trim();
    }
}

const bomb = new Bomb(code, color, time);

console.log(`code : ${bomb.code}`);
console.log(`color : ${bomb.color}`);
console.log(`second : ${bomb.time}`);