require('string.prototype.padstart').shim();
let MapGenerator = require('./map-generator');

class Day14Part2 {
  constructor() {
    this.regionCount = 0;
    this.regionId = 1;
  }

  processCell(regionMap, row, col, region) {
    if (regionMap[row][col] !== 1) {
      // It's either not a region or it's already mapped into a region
      return;
    }
    
    if (region) {
      // We are adding this cell to an existing region
      regionMap[row][col] = region;
    } else {
      // New region
      this.regionCount++;
      this.regionId++;
      regionMap[row][col] = this.regionId;
    }

    // Process surrounding cells
    for (let y = row - 1; y <= row + 1; y++) {
      for (let x = col - 1; x <= col + 1; x++) {
        if (y < 0 || x < 0 || y >= regionMap.length || x >= regionMap[row].length || (y === row && x === col) || (y !== row && x !== col)) {
          continue;
        }

        this.processCell(regionMap, y, x, regionMap[row][col]);
      }
    }
  }

  process(input) {
    let generator = new MapGenerator(input);

    let regionMap = generator.map.map(el => el.split('').map(char => +char));

    for (let row = 0; row < regionMap.length; row++) {
      for (let col = 0; col < regionMap[row].length; col++) {
        this.processCell(regionMap, row, col);
      }
    }

    return this.regionCount;
  }
}

module.exports = Day14Part2;