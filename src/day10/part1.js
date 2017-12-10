let Hasher = require('./hasher');

class Day10Part1 {
  process(input, length) {
    let hasher = new Hasher(length || 256);

    input.split(',').map(el => hasher.hash(+el));
    return hasher.state[0] * hasher.state[1];
  }
}

module.exports = Day10Part1;