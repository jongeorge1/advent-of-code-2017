let toBinary = require('hex-to-binary');
require('string.prototype.padstart').shim();
let Hasher = require('./hasher');

class MapGenerator {
  constructor(input) {
    if (input) {
      let hashes = [];
      for (let i = 0; i < 128; i++) {
        let hasher = new Hasher();
        hashes.push(hasher.hash(input + '-' + i));
      }

      this.map = hashes.map(el => this.stringToBinary(el));
    }
  }  

  charToBinary(input) {
    return toBinary(input).padStart(4, '0');
  }
  
  stringToBinary(input) {
    return input.split('').map(el => this.charToBinary(el)).join('');
  }
}

module.exports = MapGenerator;