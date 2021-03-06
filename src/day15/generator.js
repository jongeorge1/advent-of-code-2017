require('string.prototype.padstart').shim();

class Generator {
  constructor(start, factor, divisor) {
    this.current = start;
    this.factor = factor;
    this.divisor = divisor;
  }

  generate() {
    do {
      this.current = (this.current * this.factor) % 2147483647;

      if (!this.divisor) break;
    } while (this.current % this.divisor !== 0)
  }
}

module.exports = Generator;