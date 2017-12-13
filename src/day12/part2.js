let Parser = require('./parser');

class Day12Part2 {
  process(input) {
    let parser = new Parser();
    parser.process(input);
    return parser.groups.length;
  }
}

module.exports = Day12Part2;