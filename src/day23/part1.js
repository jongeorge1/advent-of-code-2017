let Processor = require('./processor');

class Day23Part1 {
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

    let processor = new Processor();

    while (processor.nextInstruction >= 0 && processor.nextInstruction < commands.length) {
      let cmd = commands[processor.nextInstruction];
      processor[cmd.cmd](cmd.reg, cmd.val);
    }

    return processor.muls;
  }
}

module.exports = Day23Part1;