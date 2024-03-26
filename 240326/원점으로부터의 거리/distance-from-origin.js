const fs = require("fs");
const [n, ...points] = fs.readFileSync(0).toString().trim().split('\n');

class Point {
    no;
    x;
    y;
    distance;

    constructor(x, y, distance, no) {
        this.x = x;
        this.y = y;
        this.distance = distance;
        this.no = no;
    }
}

const sortPoint = points.map((point, i) => {
    const [x, y] = point.split(' ').map(Number);
    const distance = Math.abs(x) + Math.abs(y);
    return new Point(x, y, distance, i + 1);
}).sort((a, b) => {
    if(a.distance !== b.distance) {
        return a.distance - b.distance
    }

    return a.no - b.no;
});

sortPoint.forEach(v => {
    console.log(v.no);
})