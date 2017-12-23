let Map = require('./map');
let Carrier = require('./carrier');

class Day22Part1 {
  process(input, iterations) {
    iterations = iterations || 10000;
    let map = new Map(input);
    let carrier = new Carrier(map);

    for (let i = 0; i < iterations; i++) {
      carrier.move();
    }

    return carrier.map.addInfectedCount;
  }
}

module.exports = Day22Part1;