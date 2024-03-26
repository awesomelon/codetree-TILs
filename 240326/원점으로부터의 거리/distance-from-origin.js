const fs = require("fs");
const [n, ...points] = fs.readFileSync(0).toString().trim().split('\n');

class Point {
    no;
    x;
    y;

    constructor(x, y, no) {
        this.x = x;
        this.y = y;
        this.no = no;
    }
}

const sortPoint = points.map((point, i) => {
    const [x,y] = point.split(' ').map(Number);
    return new Point(x, y, i + 1);
}).sort((a, b) => (a.x - b.x) + (a.y - b.y));

sortPoint.forEach(v => {
    console.log(v.no);
})