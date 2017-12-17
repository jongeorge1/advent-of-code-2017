class Day17Part2 {
  constructor() {
    this.position = 0;
    this.value = 1;

    this.val0 = 0;
    this.val1;
  }

  cycle(distance) {
    let target = ((this.position + distance) % this.value) + 1;
    
    if (target === 0) {
      this.val1 = this.val0;
      this.val0 = this.value;
    } else if (target === 1) {
      this.val1 = this.value;
    }

    this.position = target;
    this.value++;
  }

  process(input, iterations) {
    input = +input;
    iterations = iterations || 50000000;

    for (let i = 0; i < iterations; i++) {
      this.cycle(input);
    }

    return this.val1;
  }
}

module.exports = Day17Part2;