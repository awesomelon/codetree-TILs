const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, ...persons] = input;

const cmp = (a, b) => {
    return a.height - b.height;
}

const results = persons.map(person => {
    const [name, height, weight] = person.split(' ');
    return {
        name,
        height: Number(height),
        weight: Number(weight)
    }
}).sort(cmp);

results.forEach(result => {
    console.log(`${result.name} ${result.height} ${result.weight}`);
});