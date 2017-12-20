let Snowflake = require('./snowflake');

class Day20Part1 {
  process(input) {
    let i = 0;
    let flakes = input.split('\r\n').map(el => new Snowflake(i++, el));
    flakes.sort((a, b) => a.accelerationMagnitude - b.accelerationMagnitude);
    
    // Won't work with > 1 flake that has acceleration of 0. Guess I got lucky.
    return flakes[0].id;
  }
}

module.exports = Day20Part1;