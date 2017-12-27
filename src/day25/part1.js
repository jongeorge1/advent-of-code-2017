let Turing = require('./turing');
let State = require('./state');
let Action = require('./action');

class Day25Part1 {
  constructor() {
    let states = [
      new State('a', [
        new Action(1, 1, 'b'),
        new Action(0, -1, 'c')
      ]),
      new State('b', [
        new Action(1, -1, 'a'),
        new Action(1, -1, 'd')
      ]),
      new State('c', [
        new Action(1, 1, 'd'),
        new Action(0, 1, 'c')
      ]),
      new State('d', [
        new Action(0, -1, 'b'),
        new Action(0, 1, 'e')
      ]),
      new State('e', [
        new Action(1, 1, 'c'),
        new Action(1, -1, 'f')
      ]),
      new State('f', [
        new Action(1, -1, 'e'),
        new Action(1, 1, 'a')
      ]),
    ];

    this.machine = new Turing(states, 'a');
  }

  process(input) {
    for (let i = 0; i < 12656374; i++) {
      this.machine.step();
    }

    return this.machine.checksum;
  }
}

module.exports = Day25Part1;