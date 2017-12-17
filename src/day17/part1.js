class Day17Part1 {
  constructor() {
    this.buffer = [];
    this.buffer.push(0);
    this.position = 0;
    this.value = 1;
  }

  cycle(distance) {
    let target = ((this.position + distance) % this.buffer.length) + 1;
    this.buffer.splice(target, 0, this.value);
    this.position = target;
    this.value++;
  }

  process(input) {
    input = +input;

    for (let i = 0; i < 2017; i++) {
      this.cycle(input);
    }

    let target = ((this.position + 1) % this.buffer.length);
    return this.buffer[target];
  }
}

module.exports = Day17Part1;