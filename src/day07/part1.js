let Program = require('./program');
let Tree = require('./tree');

class Day07Part1 {
  constructor() {
    this.programs = [];
  }

  process(input) {
    let tree = new Tree(input);
    return tree.root.name;
  }
}

module.exports = Day07Part1;