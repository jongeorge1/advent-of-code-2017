class Day06Part2 {
  cycle(input) {
    let blocksToReallocate = Math.max(...input);
    let pos = input.indexOf(blocksToReallocate);

    let result = input.slice();
    result[pos] = 0;

    while (blocksToReallocate > 0) {
      pos = (pos + 1) % input.length;
      result[pos]++;
      blocksToReallocate--;
    }

    return result;
  }

  serialize(input) {
    return input.join(',');
  }

  findLoopLength(initialState) {
    let previousStates = [];
    let iterations = 0;

    let currentState = initialState;

    while (previousStates.indexOf(this.serialize(currentState)) === -1) {
      previousStates.push(this.serialize(currentState));
      currentState = this.cycle(currentState);
      iterations++;
    }

    let firstTimeWeSawIt = previousStates.indexOf(this.serialize(currentState));
    return iterations - firstTimeWeSawIt;
  }

  process(input) {
    let initialState = input.split('\t').map(x => +x);
    return this.findLoopLength(initialState);
  }
}

module.exports = Day06Part2;