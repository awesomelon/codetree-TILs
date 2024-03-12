let a = 1, b = 2, c = 3;
const sum = a + b + c;
a = sum, b = sum, c = sum;
console.log(`${a} ${b} ${c}`);