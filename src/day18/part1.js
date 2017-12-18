let Duet = require('./duet');

class Day18Part1 {
  constructor() {
  }

  process(input) {
    let commands = input.split('\n').map(el => {
      let vals = el.split(' ');
      return {
        full: el,
        cmd: vals[0],
        reg: vals[1],
        val: vals[2]
      };
    });

    let duet = new Duet();

    while (duet.recovered === null) {
      let cmd = commands[duet.nextInstruction];
      duet[cmd.cmd](cmd.reg, cmd.val);
    }

    return duet.recovered;
  }
}

module.exports = Day18Part1;