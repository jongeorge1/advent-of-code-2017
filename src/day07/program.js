class Program {
  constructor(input) {
    let parts = input.split(' -> ');
    let nameAndWeight = parts[0].split(' ');
    this.name = nameAndWeight[0];
    this.weight = +(nameAndWeight[1].substring(1, nameAndWeight[1].length - 1));

    this.children = [];
    if (parts.length === 2) {
      this.children = parts[1].split(', ');
    }

    this.parent = null;
  }

  isBalanced() {
    if (this.children.length === 0) {
      return true;
    }

    return !!this.children.map(el => el.totalWeight()).reduce((a, b) => a === b ? a : NaN);
  }

  depth() {
    // How deep in the tree is this node?
    if (this.parent) {
      return this.parent.depth() + 1;
    }

    return 1;
  }

  totalWeight() {
    return this.weight + this.children.reduce((acc, el) => {
      acc+= el.totalWeight();
      return acc;
    }, 0);
  }
}

module.exports = Program;