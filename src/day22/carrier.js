class Carrier {
  constructor(map) {
    this.map = map;
    this.x = 0;
    this.y = 0;
    this.direction = 0;
    this.directions = [
      { x: 0, y: -1 }, // up
      { x: 1, y: 0 },  // right
      { x: 0, y: 1 },  // down
      { x: -1, y: 0 }  // left
    ];
  }

  turnLeft() {
    this.direction = (4 + this.direction - 1) % 4;
  }

  turnRight() {
    this.direction = (4 + this.direction + 1) % 4;
  }

  forward() {
    let move = this.directions[this.direction];
    this.x += move.x;
    this.y += move.y;
  }

  move() {
    if (this.map.isInfected(this.x, this.y)) {
      this.turnRight();
      this.map.clearInfected(this.x, this.y);
    } else {
      this.turnLeft();
      this.map.addInfected(this.x, this.y);
    }

    this.forward();
  }
}

module.exports = Carrier;