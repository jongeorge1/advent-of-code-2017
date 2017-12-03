let spiral = require('./spiral');

class Day03Part1 {
  process(input) {
    let pos = spiral(+input);
    return Math.abs(pos.x) + Math.abs(pos.y);
  }
}

module.exports = Day03Part1;