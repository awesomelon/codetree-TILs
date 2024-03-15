const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];
const indexA = days.findIndex(v => v === A);

const diff = new Date(`2024-${m2}-${d2}`).getTime() - new Date(`2024-${m1}-${d1}`).getTime();

const millToDay = 1000 * 60 * 60 * 24;

const dates = Math.floor(diff / millToDay);

if(dates % 7 >= indexA) {
    console.log(Math.floor(dates / 7) + 1);
} else {
    console.log(Math.floor(dates / 7));
}