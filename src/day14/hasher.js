require('string.prototype.padstart').shim();

class Hasher {
  constructor(listSize) {
    this.listSize = listSize || 256;
    this.state = Array(...Array(this.listSize)).map((el, i) => i);
    this.position = this.skip = 0;
  }

  buildLengthsArray(input) {
    let bytes = input.split('').map(el => el.charCodeAt(0));
    bytes.push(17, 31, 73, 47, 23);
    return bytes;
  }
  
  hash(input) {
    let lengths = this.buildLengthsArray(input);

    for (let i = 0; i < 64; i++) {
      lengths.map(el => this.hashCycle(+el));
    }

    return this.hex;
  }

  hashCycle(length) {
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