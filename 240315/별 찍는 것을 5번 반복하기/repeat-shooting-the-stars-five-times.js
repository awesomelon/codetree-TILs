function print10Starts() {
    return '*'.repeat(10);
}

for(let i = 0; i < 5; i++) {
    process.stdout.write(print10Starts());
    console.log();
}