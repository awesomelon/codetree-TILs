const fs = require("fs");
const persons = fs.readFileSync(0).toString().trim().split('\n');

class Person {
    name;
    height;
    weight;

    constructor(name, height, weight) {
        this.name = name;
        this.height = Number(height);
        this.weight = Number(weight).toFixed(1);
    }
}

const personsByName = persons.map(person => new Person(...person.split(' '))).sort((a,b) => {
    if(a.name > b.name) {
        return 1;
    }
    if(a.name < b.name) {
        return -1;
    }
    return 0;
});

const personsByHeight = persons.map(person => new Person(...person.split(' '))).sort((a,b) => {
    return b.height - a.height;
});

console.log('name');
personsByName.forEach(person => {
    console.log(`${person.name} ${person.height} ${person.weight}`);
});

console.log()

console.log('height');
personsByHeight.forEach(person => {
    console.log(`${person.name} ${person.height} ${person.weight}`);
});