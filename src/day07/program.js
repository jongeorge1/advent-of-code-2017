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
}

module.exports = Program;