let Hasher = require('./hasher');

class Day10Part1 {
  process(input, length) {
    length = length || 256;
    let hasher = new Hasher(length);

    input.split(',').map(el => hasher.hash(+el));
    return hasher.state[0] * hasher.state[1];
  }
}

module.exports = Day10Part1;