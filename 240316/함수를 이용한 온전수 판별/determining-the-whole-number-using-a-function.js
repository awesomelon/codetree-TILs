const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const isOnjeonsu = (n) => {
    if(n % 2 === 0) {
        return false;
    }

    if(n % 3 === 0 && n % 9 !== 0) {
        return false;
    }    

    while(n > 10) {
        n %= 10;
    }

    if(n === 5) {
        return false;
    }

    return true;
}


let cnt = 0;

for(let i = a; i <= b; i++) {
    if(isOnjeonsu(i)) {
        cnt++;
    }
}

console.log(cnt);