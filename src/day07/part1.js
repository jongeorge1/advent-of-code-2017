class Program {
  constructor(name, weight, children) {
    this.name = name;
    this.weight = weight;

    this.children = children;
    this.parent = null;
  }
}

class Day07Part1 {
  constructor() {
    this.programs = [];
  }

  parseLine(line) {
    let parts = line.split(' -> ');
    let nameAndWeight = parts[0].split(' ');
    let name = nameAndWeight[0];
    let weight = +(nameAndWeight[1].substring(1, nameAndWeight[1].length - 1));

    let children = [];
    if (parts.length === 2) {
      children = parts[1].split(', ');
    }

    return new Program(name, weight, children);
  }

  parseInput(input) {
    return input.split('\r\n').map(e => this.parseLine(e));
  }

  buildTree(programs) {
    let dict = programs.reduce((acc, el) => {
      acc[el.name] = el;
      return acc;
    }, {});

    for (let program of programs) {
      program.children = program.children.map(el => {
        let child = dict[el];
        child.parent = program;
        return child;
      });
    }

    console.log(programs);
  }

  process(input) {
    let programs = this.parseInput(input);
    this.buildTree(programs);

    // First item without a parent...
    return programs.filter(el => el.parent === null)[0].name;
  }
}

module.exports = Day07Part1;