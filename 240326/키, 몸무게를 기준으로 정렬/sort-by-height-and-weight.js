const fs = require("fs");
const [n, ...list] = fs.readFileSync(0).toString().trim().split('\n');

class Person {
    name;
    height;
    weight;

    constructor(name, height, weight) {
        this.name = name;
        this.height = Number(height);
        this.weight = Number(weight)
    }
}

list.map(l => new Person(...l.split(' '))).sort((a,b) => {
    if(a.height !== b.height) {
        return a.height - b.height;
    }

    return b.weight - a.weight;
}).forEach((p => {
    console.log(`${p.name} ${p.height} ${p.weight}`);
}))