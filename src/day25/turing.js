class Turing {
  constructor(states, startStateName) {
    this.stateMap = new Map();
    states.map(el => this.stateMap.set(el.name, el));
    this.setState(startStateName);
    this.positionsWith1 = [];
    this.cursor = 0;
  }

  get checksum() {
    return this.positionsWith1.length;
  }

  setState(name) {
    this.state = this.stateMap.get(name);
  }
  
  get currentTapeValue() {
    if (this.positionsWith1.indexOf(this.cursor) === -1) {
      return 0;
    }

    return 1;
  }

  set currentTapeValue(val) {
    if (this.currentTapeValue !== val) {
      if (val === 0) {
        this.positionsWith1.splice(this.positionsWith1.indexOf(this.cursor), 1);
      } else {
        this.positionsWith1.push(this.cursor);
      }
    }
  }

  get currentAction() {
    return this.state.actions[this.currentTapeValue];
  }

  step() {
    let action = this.currentAction;
    this.currentTapeValue = action.write;
    this.cursor += action.move;
    this.setState(action.nextState);
  }
}

module.exports = Turing;