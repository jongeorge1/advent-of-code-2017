let spiral = require('./spiral');

class Day03Part2 {
  constructor() {
    this.square = [];

    for (let i = -500; i < 500; i++) {
      this.square[i] = [];
    }

    this.square[0][0]= 1;
  }

  populateValue(step) {
    if (step === 1) {
      return 1;
    }

    let coords = spiral(step);
    // Get values for adjacent this.squares
    let sum = 0;
    sum += this.square[coords.x - 1][coords.y - 1] || 0;
    sum += this.square[coords.x - 1][coords.y] || 0;
    sum += this.square[coords.x - 1][coords.y + 1] || 0;
    sum += this.square[coords.x][coords.y - 1] || 0;
    sum += this.square[coords.x][coords.y + 1] || 0;
    sum += this.square[coords.x + 1][coords.y - 1] || 0;
    sum += this.square[coords.x + 1][coords.y] || 0;
    sum += this.square[coords.x + 1][coords.y + 1] || 0;
    
    this.square[coords.x][coords.y] = sum;
    return sum;
  }

  process(input) {
    let i = 0;

    while(true) {
      i++;
      let sum = this.populateValue(i);

      if (sum > +input) {
        return sum;
      }
    }
  }
}

module.exports = Day03Part2;