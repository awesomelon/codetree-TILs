const fs = require('fs');
const A = fs.readFileSync('/dev/stdin').toString().trim();

const diffrentAlphabet = (a) => {
    for(let i = 0; i < a.length; i++) {
        const current = a[i];
        for(let j = 0; j < i; j++) {
            const diff = a[j];
            if(current !== diff) {
                return 'Yes';
            }
        }
    }

    return 'No';
}

console.log(diffrentAlphabet(A));