let MapGenerator = require('./map-generator');

class Day14Part1 {
  process(input) {
    let generator = new MapGenerator(input);
    let binaryValues = generator.map;
    binaryValues = binaryValues.map(el => el.split('').reduce((acc, col) => { acc += +col; return acc; }, 0));
    let result = binaryValues.reduce((acc, el) => { acc += el; return acc; }, 0);
    return result;
  }
}

module.exports = Day14Part1;