let Snowflake = require('./snowflake');

class Day20Part2 {
  removeCollisions(t) {
    let flakesToRemove = [];

    for (var i = 0; i < this.flakes.length; i++) {
      let currentFlake = this.flakes[i];
      if (flakesToRemove.indexOf(currentFlake === -1)) {
        let flakesInThatPosition = this.flakes.filter(el => flakesToRemove.indexOf(el) === - 1 && el.isInCollisionWith(currentFlake));

        if (flakesInThatPosition.length > 1) {
          flakesToRemove.push(...flakesInThatPosition);
        }
      }
    }

    let removedFlakes = 0;
    for (var i = 0; i < flakesToRemove.length; i++) {
      let index = this.flakes.indexOf(flakesToRemove[i]);
      removedFlakes += this.flakes.splice(index, 1);
    }

    return removedFlakes;
  }

  process(input) {
    let i = 0;
    this.flakes = input.split('\r\n').map(el => new Snowflake(i++, el));

    let iterationsWithoutRemoval = 0;

    do {
      let removedCount = this.removeCollisions();
      
      if (removedCount > 0) {
        iterationsWithoutRemoval = 0;
      } else {
        iterationsWithoutRemoval++;
      }

      this.flakes.map(el => el.move());
    } while (this.flakes.length > 1 && iterationsWithoutRemoval < 500);

    return this.flakes.length;
  }
}

module.exports = Day20Part2;