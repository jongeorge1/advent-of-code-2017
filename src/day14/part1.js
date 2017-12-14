let Hasher = require('./hasher');
let toBinary = require('hex-to-binary');
require('string.prototype.padstart').shim();

class Day14Part1 {
  charToBinary(input) {
    return toBinary(input).padStart(4, '0');
  }
  
  stringToBinary(input) {
    return input.split('').map(el => this.charToBinary(el)).join('');
  }

  process(input) {
    let hashes = [];
    for (let i = 0; i < 128; i++) {
      let hasher = new Hasher();
      hashes.push(hasher.hash(input + '-' + i));
    }

    let binaryValues = hashes.map(el => this.stringToBinary(el));
    binaryValues = binaryValues.map(el => el.split('').reduce((acc, col) => { acc += +col; return acc; }, 0));
    let result = binaryValues.reduce((acc, el) => { acc += el; return acc; }, 0);
    return result;
  }
}

module.exports = Day14Part1;