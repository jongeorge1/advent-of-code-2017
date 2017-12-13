class Day11Part2 {
  constructor() {
    this.furthestDistanceFromHome = 0;

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

  get movesFromHome() {
    let absx = Math.abs(this.position.x);
    let absy = Math.abs(this.position.y);
    
    return absx + ((absy - absx) / 2);
  }

  followPath(directions) {
    directions.map(el => {
      this.step(el);
      this.furthestDistanceFromHome = Math.max(this.movesFromHome, this.furthestDistanceFromHome);
    });
  }

  process(input) {
    this.followPath(input.split(','));
    return this.furthestDistanceFromHome;
  }
}

module.exports = Day11Part2;