const fs = require('fs');
const A = fs.readFileSync('/dev/stdin').toString().trim();

const comparePalindrome = (a) => {
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== a[a.length -1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(comparePalindrome(A) ? 'Yes': 'No');