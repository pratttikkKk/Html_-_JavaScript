const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the length of the rectangle: ', (length) => {
    rl.question('Enter the width of the rectangle: ', (width) => {
        const area = parseFloat(length) * parseFloat(width);
        console.log(`The area of the rectangle is: ${area}`);
        rl.close();
    });
});
