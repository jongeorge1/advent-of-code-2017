class Action {
  constructor(write, move, nextState) {
    this.write = write;
    this.move = move;
    this.nextState = nextState;
  }
}

module.exports = Action;