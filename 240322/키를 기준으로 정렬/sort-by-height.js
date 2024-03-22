const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, ...persons] = input;

class Person {
    name;
    height;
    weight;

    constructor(name = '', height = 0, weight = 0) {
        this.name = name;
        this.height = Number(height);
        this.weight = Number(weight);
    }
}

const cmp = (a, b) => {
    return a.height - b.height;
}

const results = persons.map(person => new Person(...person.split(' '))).sort(cmp);

results.forEach(result => {
    console.log(`${result.name} ${result.height} ${result.weight}`);
});