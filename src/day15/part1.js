let Generator = require('./generator');

class Day15Part1 {
  process(startA, startB, cycles) {
    if (arguments.length === 1) {
      startA = 679;
      startB = 771;
      cycles = 40000000;
    }

    let matches = 0;

    let genA = new Generator(startA, 16807);
    let genB = new Generator(startB, 48271);

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

module.exports = Day15Part1;