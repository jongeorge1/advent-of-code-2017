let Program = require('./program');

class Tree {
  constructor(input) {
    this.programs = this.parseInput(input);
    
    this.programLookup = this.programs.reduce((acc, el) => {
      acc[el.name] = el;
      return acc;
    }, {});

    this.buildTree();

    this.root = this.programs.filter(el => el.parent === null)[0];
  }

  parseInput(input) {
    return input.split('\r\n').map(e => new Program(e));
  }

  buildTree() {
    for (let program of this.programs) {
      program.children = program.children.map(el => {
        let child = this.programLookup[el];
        child.parent = program;
        return child;
      });
    }
  }
}

module.exports = Tree;