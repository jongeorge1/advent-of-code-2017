class Day11Part2 {
  constructor() {
    this.furthestDistanceFromHome = 0;
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

  get movesFromHome() {
    let absx = Math.abs(this.position.x);
    let absy = Math.abs(this.position.y);
    
    return absx + ((absy - absx) / 2);
  }

  followPath(directions) {
    directions.map(el => {
      this.step(el);
      
      let distance = this.movesFromHome;
      if (distance > this.furthestDistanceFromHome) {
        this.furthestDistanceFromHome = distance;
      }
    });
  }

  process(input) {
    this.followPath(input.split(','));
    return this.furthestDistanceFromHome;
  }
}

module.exports = Day11Part2;