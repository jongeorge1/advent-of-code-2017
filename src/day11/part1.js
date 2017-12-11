class Day11Part1 {
  constructor() {
    this.position = {
      x: 0,
      y: 0
    };
  }

  step(direction, pos) {
    pos = pos || this.position;
    switch (direction) {
      case 'n':
        pos.y += 2;
        break;
      case 's':
        pos.y += -2;
        break;
      case 'ne':
        pos.x++;
        pos.y++;
        break;
      case 'nw':
        pos.x--;
        pos.y++;
        break;
      case 'se':
        pos.x++;
        pos.y--;
        break;
      case 'sw':
        pos.x--;
        pos.y--;
        break;
    }
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