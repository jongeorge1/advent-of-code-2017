require('string.prototype.padstart').shim();

class Hasher {
  constructor(listSize) {
    this.listSize = listSize || 256;
    this.state = Array(...Array(this.listSize)).map((el, i) => i);
    this.position = this.skip = 0;
  }

  hash(length) {
    let reversedSection = [];

    for (var i = 0; i < length; i++) {
      let index = (this.position + i) % this.listSize;
      reversedSection[length - i - 1] = this.state[index];
    }
    
    for (var i = 0; i < length; i++) {
      let index = (this.position + i) % this.listSize;
      this.state[index] = reversedSection[i];
    }

    this.position += (length + this.skip);
    this.skip++;
  }

  denseBlock(input) {
    return input.reduce((acc, el) => acc ^ el);
  }

  get denseState() {
    return Array(...Array(16)).map((el, i) => this.denseBlock(this.state.slice(i * 16, (i * 16) + 16)));
  }

  get hex() {
    return this.denseState.map(el => el.toString(16).padStart(2, '0')).join('');
  }
}

module.exports = Hasher;