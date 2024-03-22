const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, ...persons] = input;

class Person {
    name;
    streeNumber;
    location;

    constructor(name, streeNumber, location) {
        this.name = name;
        this.streeNumber = streeNumber;
        this.location = location;
    }
}

const result = persons
    .map(person => new Person(...person.split(' ')))
    .sort((a,b) => {
        if(a.name < b.name) {
            return 1;
        }

        if(a.name > b.name) {
            return -1;
        }
        return 0;
    })[0];

console.log(`name ${result.name}`);
console.log(`addr ${result.streeNumber}`);
console.log(`city ${result.location}`)