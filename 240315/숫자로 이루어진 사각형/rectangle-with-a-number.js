const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

for(let i = 1; i <= N * N; i++) {    
    let number = i > 9 ? i - 9: i;  
    process.stdout.write(`${number} `);
    if(i % 4 === 0) {
        console.log();
    }  
}