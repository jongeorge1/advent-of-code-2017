class Map {
  constructor(start) {
    start = start.split('\r\n').join('');
    let width = Math.sqrt(start.length);
    let centerOffset = Math.floor(width / 2);
    this.infected = [];
    this.addInfectedCount = 0;
    
    for (let i = 0; i < start.length; i++) {
      if (start[i] === '#') {
        let x = i % width;
        let y = Math.floor(i / width);
        this.addInfected(x - centerOffset, y - centerOffset);
      }
    }

    this.addInfectedCount = 0;
  }

  key(x, y) {
    return x + ':' + y;
  }

  addInfected(x, y) {
    let key = this.key(x, y);
    this.infected.push(key);
    this.addInfectedCount++;
  }

  clearInfected(x, y) {
    let key = this.key(x, y);
    let i = this.infected.indexOf(key);
    if (i !== -1) {
      this.infected.splice(i, 1);
    }
  }

  isInfected(x, y) {
    let key = this.key(x, y);
    return this.infected.indexOf(key) !== -1;
  }
}

module.exports = Map;