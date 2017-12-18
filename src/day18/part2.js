let Duet = require('./duet.v2');

class Day18Part2 {
  cycle(duet, instructions) {
    let commandsThisLoop = 0;
    let cmd;
    let duetEnded;

    do {
      duetEnded = duet.nextInstruction < 0 || duet.nextInstruction >= instructions.length;
      
      if (!duetEnded) {
        cmd = instructions[duet.nextInstruction];
        duet[cmd.cmd](cmd.reg, cmd.val);
        commandsThisLoop++;
      }
    } while (!duet.waiting && !duetEnded)

    return commandsThisLoop;
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

    let program0 = new Duet(0);
    let program1 = new Duet(1);

    program0.partnerWith(program1);
    
    let commandsThisLoop;

    do {
      commandsThisLoop = this.cycle(program0, commands) + this.cycle(program1, commands);
    } while (commandsThisLoop > 2)

    return program1.sendCount;
  }
}

module.exports = Day18Part2;