const fs = require("fs");
const [n, ...students] = fs.readFileSync(0).toString().trim().split('\n');

class Student {
    name;
    class1;
    class2;
    class3;

    constructor(name = '', class1 = 0, class2 = 0, class3 = 0) {
        this.name = name;
        this.class1 = Number(class1);
        this.class2 = Number(class2);
        this.class3 = Number(class3);
    }
}

const cmp = (a,b) => {
    return (a.class1 + a.class2 + a.class3) - (b.class1 + b.class2 + b.class3);
}

const result = students.map(student => new Student(...student.split(' '))).sort(cmp);

result.forEach(v => {
    console.log(`${v.name} ${v.class1} ${v.class2} ${v.class3}`);
});