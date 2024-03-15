const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const [, ...rest] = input;
const students = rest.map((v, i) => {
    const [height, weight] = v.split(' ').map(Number);
    return {
        no: i+1,
        height,
        weight
    }
}).sort((a,b) => {
    if(a.height < b.height) {
        return -1;
    }

    if(a.height === b.height && a.weight > b.weight) {
        return -1;
    }

    return 1;
});

students.forEach(student => {
    console.log(`${student.height} ${student.weight} ${student.no}`);
});