let Generator = require('./generator');

class Day15Part2 {
  process(startA, startB, cycles) {
    if (arguments.length === 1) {
      startA = 679;
      startB = 771;
      cycles = 5000000;
    }

    let matches = 0;

    let genA = new Generator(startA, 16807, 4);
    let genB = new Generator(startB, 48271, 8);

    for (let i = 0; i < cycles; i++) {
      genA.generate();
      genB.generate();

      if ((genA.current & 65535) === (genB.current & 65535)) {
        matches++;
      }
    }

    return matches;
  }
}

module.exports = Day15Part2;