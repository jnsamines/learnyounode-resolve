var fs = require('fs'),
    file = fs.readFileSync(process.argv[2]),
    lines = file.toString().split('\n');

console.log(lines.length - 1);