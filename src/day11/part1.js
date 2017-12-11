class Day11Part1 {
  constructor() {
    this.position = {
      x: 0,
      y: 0
    };

    this.moves = {
      n: pos => pos.y += 2,
      s: pos => pos.y -=2,
      ne: pos => { pos.x++; pos.y++ },
      se: pos => { pos.x++; pos.y-- },
      nw: pos => { pos.x--; pos.y++ },
      sw:  pos => { pos.x--; pos.y-- },
    };
  }

  step(direction) {
    this.moves[direction](this.position);
  }

  followPath(directions) {
    directions.map(el => this.step(el));
  }

  get movesFromHome() {
    let absx = Math.abs(this.position.x);
    let absy = Math.abs(this.position.y);
    
    return absx + ((absy - absx) / 2);
  }

  process(input) {
    this.followPath(input.split(','));
    return this.movesFromHome;
  }
}

module.exports = Day11Part1;