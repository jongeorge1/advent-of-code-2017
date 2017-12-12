let Parser = require('./parser');

class Day12Part1 {
  process(input) {
    let parser = new Parser();
    parser.process(input);
    let group = parser.programs[0].group;
    return group.programs.size;
  }
}

module.exports = Day12Part1;