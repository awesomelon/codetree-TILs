const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [, ...datas] = input;
const rains = datas.filter(v => v.includes('Rain'));
let recent = '';

rains.forEach(data => {
    const [date, day, weather] = data.split(' ');

    const current = new Date(date);
    
    if(!recent) {
        recent = `${date} ${day} ${weather}`;
    }

    const [t_date] = recent.split(' ');
    const last = new Date(t_date);

    if(last.getTime() > current.getTime()) {
        recent = `${date} ${day} ${weather}`;
    }
});

console.log(recent);