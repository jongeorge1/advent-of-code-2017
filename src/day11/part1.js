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
    let steps = 0;
    let pos = {
      x: this.position.x,
      y: this.position.y
    };
    
    while (pos.x !== 0 || pos.y !== 0) {
      if (pos.x > 0) {
        if (pos.y > 0) {
          this.step('sw', pos);
        } else{
          this.step('nw', pos);
        }
      } else if (pos.x < 0) {
        if (pos.y > 0) {
          this.step('se', pos);
        } else{
          this.step('ne', pos);
        }
      } else {
        if (pos.y > 0) {
          this.step('s', pos);
        } else{
          this.step('n', pos);
        }
      }

      steps++;
    }

    return steps;
  }

  process(input) {
    this.followPath(input.split(','));
    return this.movesFromHome;
  }
}

module.exports = Day11Part1;