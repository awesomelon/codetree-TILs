const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const asc = (a, b) => a - b;

const A = input[1].split(' ').map(Number).sort(asc);
const B = input[2].split(' ').map(Number).sort(asc);

const sameCheck = () => {
    for(let i = 0; i < A.length; i++) {
        const a = A[i];
        const b = B[i];

        if(a !== b) {
            return 'No';
        }
    }

    return 'Yes';
}
console.log(sameCheck());