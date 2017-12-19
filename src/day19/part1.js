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
    let letters = [];
    let direction = 2;
    let done = false;
    let char;
    let steps = 0;

    // console.log(`Starting from ${pos.x}, ${pos.y}`);

    do {
      done = true;

      // Find next direction
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

        steps++;
      }

      if (!(done || char === '|' || char === '-' || char === '+')) {
        letters.push(char);
      }
    } while (!done)

    return letters.join('');
  }
}

module.exports = Day18Part1;