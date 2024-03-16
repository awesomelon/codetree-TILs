const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const check369 = (n) => {
    const asString = `${n}`;
    let exists369 = false;

    for(let i = 0; i < asString.length; i++) {
        const current = Number(asString[i]);

        if(current === 3 || current === 6 || current === 9) {
            exists369 = true;
        }
    }

    return exists369; 
}

const check3 = (n) => {
    return n % 3 === 0;
}

let cnt = 0;

for(let i = a; i <= b; i++) {
    if(check369(i) || check3(i)) {
        cnt++;
    }
}

console.log(cnt);