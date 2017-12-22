class Mapv2 {
  constructor(start) {
    this.states = {
      clean: 0,
      weakened: 1,
      infected: 2,
      flagged: 3
    };

    start = start.split('\r\n').join('');
    let width = Math.sqrt(start.length);
    let centerOffset = Math.floor(width / 2);
    this.infected = new Map();
    this.addInfectedCount = 0;
    
    for (let i = 0; i < start.length; i++) {
      if (start[i] === '#') {
        let x = i % width;
        let y = Math.floor(i / width);
        this.setState(x - centerOffset, y - centerOffset, this.states.infected);
      }
    }

    this.addInfectedCount = 0;
  }

  key(x, y) {
    return x + ':' + y;
  }

  setState(x, y, state) {
    let key = this.key(x, y);
    if (state === this.states.clean) {
      this.infected.delete(key);
    } else {
      this.infected.set(key, state);
    }

    if (state === this.states.infected) {
      this.addInfectedCount++;
    }
  }

  getState(x, y) {
    let key = this.key(x, y);
    return this.infected.get(key) || this.states.clean;
  }
}

module.exports = Mapv2;