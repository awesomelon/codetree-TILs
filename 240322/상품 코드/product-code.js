const fs = require("fs");
const [title, code] = fs.readFileSync(0).toString().trim().split(' ');

class Product {
    title;
    code;

    constructor(title = 'codetree', code = '50') {
        this.title = title;
        this.code = code;
    }
}

const product1 = new Product();
const product2 = new Product(title, code);

console.log(`product ${product1.code} is ${product1.title}`);
console.log(`product ${product2.code} is ${product2.title}`);