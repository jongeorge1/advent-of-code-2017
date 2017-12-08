class Day08Part1 {
  parseInputLine(line) {
    let elems = line.split(' ');
    elems;
    return function(registers) {
      let check = registers.get(elems[4]) || 0;
      let expr = eval(check + elems[5] + elems[6]);

      if (expr) {
        let currTarget = registers.get(elems[0]) || 0;
        if (elems[1] === 'inc') {
          currTarget += +elems[2];
        } else {
          currTarget -= +elems[2];
        }
        registers.set(elems[0], currTarget);
      }
    }
  }

  parseInput(input) {
    this.instructions = [];

    for (let line of input.split('\r\n')) {
      this.instructions.push(this.parseInputLine(line))
    }
  }

  largestValue() {
    return Math.max(...Array.from(this.registers.values()));
  }

  process(input) {
    this.parseInput(input);
    this.registers = new Map();
  
    for (let instruction of this.instructions) {
      instruction(this.registers);
    }

    return this.largestValue();
  }
}

module.exports = Day08Part1;