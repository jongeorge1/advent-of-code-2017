class Layer {
  constructor(id, size) {
    this.id = id;
    this.size = size;
    this.position = 0;
    this.direction = 1;

    this.hitSeverity = this.id * this.size;
  }

  move() {
    this.position += this.direction;

    if (this.position === 0 && this.direction === -1) {
      this.direction = 1;
    } else if (this.position === this.size - 1 && this.direction === 1) {
      this.direction = -1;
    }
  }
}

module.exports = Layer;