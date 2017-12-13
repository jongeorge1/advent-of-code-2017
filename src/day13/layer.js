class Layer {
  constructor(id, size) {
    this.id = id;
    this.size = size;
    this.biDirectionalSize = size + size - 2;
    this.hitSeverity = this.id * this.size;
  }

  positionAfter(picoseconds) {
    let pos = picoseconds % this.biDirectionalSize;
    if (pos >= this.size) {
      pos = Math.abs(pos - this.biDirectionalSize);
    }

    return pos;
  }
}

module.exports = Layer;