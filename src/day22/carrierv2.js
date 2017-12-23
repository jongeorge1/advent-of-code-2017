let Carrier = require('./carrier');

class Carrierv2 extends Carrier {
  constructor(map) {
    super(map);
  }

  move() {
    let state = this.map.getState(this.x, this.y);

    switch (state) {
      case this.map.states.clean:
        this.turnLeft();
        break;
      case this.map.states.infected:
        this.turnRight();
        break;
      case this.map.states.flagged:
        this.turnLeft();
        this.turnLeft();
        break;
    }

    let newState = this.getNewState(state);
    this.map.setState(this.x, this.y, newState);
    this.forward();
  }

  getNewState(state) {
    return (state + 1) % 4;
  }
}

module.exports = Carrierv2;