class Day18Part1 {
  constructor() {
    this.directions = [
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: 0, y: 1},
      { x: -1, y: 0}];
  }

  process(input) {
    let rows = input.split('\n');
    let startX = rows[0].indexOf('|');
    let pos = { x: startX, y: 0 };
    let direction = 2;
    let done = false;
    let char;
    let steps = 0; 

    do {
      steps++;

      done = true;

      for (let i = 0; i < 3; i++) {
        direction = (direction + i) % 4;
        
        let newPos = { x: pos.x + this.directions[direction].x, y: pos.y + this.directions[direction].y };
        
        let row = rows[newPos.y];
        if (row === undefined) {
          continue;
        }

        char = rows[newPos.y][newPos.x]

        if (!(char === ' ' || char === undefined)) {
          // We've found the next move
          pos = newPos;
          done = false;
          break;
        }
      }
    } while (!done)

    return steps;
  }
}

module.exports = Day18Part1;