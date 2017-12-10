require('string.prototype.padstart').shim();

class Hasher {
  constructor(listSize) {
    console.log(listSize);
    this.state = [];
    this.listSize = listSize || 256;
    for (let i = 0; i < this.listSize; i++) {
      this.state.push(i);
    }

    this.position = 0;
    this.skip = 0;
  }

  hash(length) {
    // Get the array to reverse
    let arrayToReverse = [];

    for (var i = 0; i < length; i++) {
      let index = (this.position + i) % this.listSize;
      arrayToReverse[i] = this.state[index];
    }

    arrayToReverse.reverse();
    
    for (var i = 0; i < length; i++) {
      let index = (this.position + i) % this.listSize;
      this.state[index] = arrayToReverse[i];
    }

    this.position += (length + this.skip);
    this.skip++;
  }

  denseBlock(input) {
    let val = input[0];
    for (let i = 1; i < input.length; i++) {
      val = val ^ input[i];
    }
    
    return val;
  }

  get denseState() {
    let result = [];
    for (let block = 0; block < 16; block++) {
      let blockVals = this.state.slice(block * 16, (block * 16) + 16);
      result.push(this.denseBlock(blockVals));
    }

    return result;
  }

  get hex() {
    return this.denseState.map(el => el.toString(16).padStart(2, '0')).join('');
  }
}



module.exports = Hasher;