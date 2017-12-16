class Day16Part1 {
  constructor(length) {
    let s = 'abcdefghijklmnopqrstuvwxyz';
    length = length || 16.
    this.programs = s.split('').slice(0, length);
    this.start = 0;
    this.length = length;
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

  process(input) {
    let moves = input.split(',');
    for (let i = 0; i < moves.length; i++) {
      let move = moves[i];
      if (move[0] === 's') {
        this.spin(+move.slice(1));
      } else if (move[0] === 'x') {
        let indices = move.slice(1).split('/');
        this.exchange(+indices[0], +indices[1]);
      } else if (move[0] === 'p') {
        let names = move.slice(1).split('/');
        this.partner(names[0], names[1]);
      }
    }

    return this.line;
  }
}

module.exports = Day16Part1;