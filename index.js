require('string.prototype.padstart').shim();

let day = ('' + process.argv[2]).padStart(2, '0');
let part = process.argv[3];

let Target = require(`./src/day${day}/part${part}`);
let target = new Target();
let input = process.argv[2];

let data = require('fs').readFileSync(`./src/day${day}/input.txt`);
let result = target.process('' + data);
console.log(result);