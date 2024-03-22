const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, ...students] = input;

class Student {
    name;
    kor;
    eng;
    math;

    constructor(name = '', kor = 0, eng = 0, math = 0) {
        this.name = name;
        this.kor = Number(kor);
        this.eng = Number(eng);
        this.math = Number(math);
    }
}

const cmp = (a, b) => {
    if(a.kor !== b.kor) {
        return b.kor - a.kor;
    }

    if(a.eng !== b.eng) {
        return b.eng - a.eng;
    }

    return b.math - a.math;
}

const results = students.map(student => new Student(...student.split(' '))).sort(cmp);

results.forEach(result => {
    console.log(`${result.name} ${result.kor} ${result.eng} ${result.math}`);
})