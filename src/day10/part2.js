let Hasher = require('./hasher');

class Day10Part2 {
  buildLengthsArray(input) {
    let bytes = input.split('').map(el => el.charCodeAt(0));
    bytes.push(17, 31, 73, 47, 23);
    return bytes;
  }

  process(input, length) {
    let hasher = new Hasher(length || 256);
    let lengths = this.buildLengthsArray(input);

    for (let i = 0; i < 64; i++) {
      lengths.map(el => hasher.hash(+el));
    }

    return hasher.hex;
  }
}

module.exports = Day10Part2;