const fs = require("fs");
const [secret, location, time] = fs.readFileSync(0).toString().trim().split(' ');

class Spy {
    secret;
    location;
    time;
    constructor({secret, location, time}) {
        this.secret = secret;
        this.location = location;
        this.time = time;
    }

    print() {
        console.log(`secret code : ${this.secret}`);
        console.log(`meeting point : ${this.location}`);
        console.log(`time : ${this.time}`);
    }
}

const spy = new Spy({secret, location, time});

spy.print();