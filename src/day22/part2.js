let Map = require('./mapv2');
let Carrier = require('./carrierv2');

class Day22Part1 {
  process(input, iterations) {
    iterations = iterations || 10000000;
    let map = new Map(input);
    let carrier = new Carrier(map);

    for (let i = 0; i < iterations; i++) {
      carrier.move();
    }

    return carrier.map.addInfectedCount;
  }
}

module.exports = Day22Part1;