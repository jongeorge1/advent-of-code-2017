require('string.prototype.padstart').shim();

class Generator {
  constructor(start, factor) {
    this.current = start;
    this.factor = factor;
  }

  generate() {
    this.current = (this.current * this.factor) % 2147483647;
  }

  get currentBinary() {
    return this.current.toString(2).padStart(32, '0');
  }

  get currentBinaryLower16() {
    return (this.current & 65535).toString(2).padStart(16, '0');
  }
}

module.exports = Generator;