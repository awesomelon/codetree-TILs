const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const asc = (a, b) => a - b;

const DUMMY_A = "43 65 64 24 87 92 15 25 6 34 7 69 82 86 89 5 18 76 49 66 98 41 9 73 96 63 95 13 100 10 94 91 11 74 61 26 39 33 72 51 58 38 77 4 29 20 44 68 46 59 57 32 71 12 81 47 19 75 56 28 37 79 90 40 23 2 8 85 31 70 55 27 99 14 45 48 84 60 21 17 22 83 88 16 30 53 93 1 54 36";
const DUMMY_B = ""

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