class Block {
  constructor(originX, originY, size, arr) {
    let blockString = '';

    for (let y = originY; y < originY + size; y++) {
      for (let x = originX; x < originX + size; x++) {
        blockString += arr[y][x];
      }
    }

    this.blockString = blockString;
  }

  getResult(rules) {
    let matches = rules.filter(el => el.matchesBlock(this));
    let rule = matches[0];
    // console.log(`${matches.length} match(es) found: ${rule.input}`)
    return rule.result;
  }

  writeResultInto(rules, arr, originX, originY) {
    let result = this.getResult(rules);
    let targetSize = this.blockString.length === 4 ? 3 : 4;
    for (let y = 0; y < targetSize; y++) {
      for (let x = 0; x < targetSize; x++) {
        arr[y + originY] = arr[y + originY] || [];
        let targetPos = x + y * targetSize;
        arr[y + originY][x + originX] = result.substr(targetPos, 1);
      }
    }
  }
}

module.exports = Block;