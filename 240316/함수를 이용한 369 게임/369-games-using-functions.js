const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const check369 = (n) => {
    while(n > 0) {
        if(n % 10 === 3 || n % 10 === 6 || n % 10 === 9) {
            return true;
        }

        n = parseInt(n / 10);
    }

    return false; 
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