class Day16Part2 {
  constructor(length) {
    this.initialise(length);
  }

  initialise(length) {
    let s = 'abcdefghijklmnopqrstuvwxyz';
    length = length || 16.
    this.programs = s.split('').slice(0, length);
    this.start = 0;
    this.length = length;
    this.startPosition = this.line;
  }

  spin(size) {
    this.start -= size;

    if (this.start < 0) {
      this.start += this.length;
    }
  }

  exchange(posA, posB) {
    let adjustedPosA = (posA + this.start) % this.length;
    let adjustedPosB = (posB + this.start) % this.length;
    let itemA = this.programs[adjustedPosA];
    let itemB = this.programs[adjustedPosB];
    this.programs[adjustedPosA] = itemB;
    this.programs[adjustedPosB] = itemA;
  }

  partner(nameA, nameB) {
    let posA = this.programs.indexOf(nameA);
    let posB = this.programs.indexOf(nameB);
    this.programs[posB] = nameA;
    this.programs[posA] = nameB;
  }

  get line() {
    let line = [];
    for (let i = 0; i < this.length; i++) {
      let index = (i + this.start) % this.length;
      line.push(this.programs[index]);
    }

    return line.join('');
  }

  buildFunctions(input) {
    let fns = [];
    let moves = input.split(',');
    for (let i = 0; i < moves.length; i++) {
      let move = moves[i];
      if (move[0] === 's') {
        fns.push(this.spin.bind(this, +move.slice(1)));
      } else if (move[0] === 'x') {
        let indices = move.slice(1).split('/');
        fns.push(this.exchange.bind(this, +indices[0], +indices[1]));
      } else if (move[0] === 'p') {
        let names = move.slice(1).split('/');
        fns.push(this.partner.bind(this, names[0], names[1]));
      }
    }

    this.functions = fns;
  }

  process(input) {
    this.buildFunctions(input);

    let cycleCount = 0;
    do {
      this.functions.map(el => el());
      cycleCount++;
    } while (this.line !== this.startPosition);

    console.log(`Cycle length is ${cycleCount}`);

    let requiredIterations = 1000000000 % cycleCount;

    console.log(`Processing ${requiredIterations} to get result`);
    
    for (let i = 0; i < requiredIterations; i++) {
      this.functions.map(el => el());
    }

    return this.line;
  }
}

module.exports = Day16Part2;