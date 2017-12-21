let Block = require('./block');
let Rule = require('./rule');

class Day21Part1 {
  process(input, iterations) {
    iterations = iterations || 5;
    let rules = input.split('\r\n').map(el => new Rule(el));

    let grid = [
      ['.', '#', '.'],
      ['.', '.', '#'],
      ['#', '#', '#'],
    ];

    this.writeGrid(grid);
    
    for (let i = 0; i < iterations; i++) {
      let blocks = this.block(grid);
      grid = this.unblock(grid, blocks, rules)
      this.writeGrid(grid);
    }

    return grid.reduce((acc, el) => acc + el.filter(x => x === '#').length, 0);
  }

  writeGrid(grid) {
    console.log();
    console.log(`Grid size is now ${grid.length}`);
    console.log(grid.map(el => el.join('')).join('\n'));
    console.log();
  }

  block(grid) {
    let step = grid.length % 2 === 0 ? 2 : 3;
    let steps = grid.length / step;
    let blocks = [];

    for (let y = 0; y < steps; y++) {
      for (let x = 0; x < steps; x++) {
        blocks.push(new Block(x * step, y * step, step, grid))
      }
    }

    return blocks;
  }

  unblock(grid, blocks, rules) {
    let sourceStep = grid.length % 2 === 0 ? 2 : 3;
    let steps = grid.length / sourceStep;
    let step = sourceStep + 1;
    
    let result = [];

    for (let i = 0; i < blocks.length; i++) {
      let x = i % steps;
      let y = Math.floor(i / steps);
      blocks[i].writeResultInto(rules, result, x * step, y * step);
    }

    return result;
  }
}

module.exports = Day21Part1;