const fs = require("fs");
const [n, ...students] = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    height;
    weight;
    no;

    constructor(height = 0, weight = 0, no = 0) {
        this.height = Number(height);
        this.weight = Number(weight);
        this.no = Number(no);
    }
}

const cmp = (a,b) => {
    if(a.height !== b.height) {
        return b.height - a.height;
    } 

    if(a.weight !== b.weight) {
        return b.weight - a.weight;
    }

    return a.no - b.no;
}

const results = students.map((student, i) => new Student(...student.split(' '), i+1)).sort(cmp);

results.forEach(result => {
    console.log(`${result.height} ${result.weight} ${result.no}`);
});