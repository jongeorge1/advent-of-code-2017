class Rule {
  constructor(input) {
    // ##/## => #.#/#../###
    let components = input.split(' => ');
    this.input = input;
    this.processRule(components[0]);
    this.processResult(components[1]);
  }

  processRule(input) {
    let center;
    input = input.split('/').join('');

    this.matches = this.getAllRotations(input);
    this.addAllFlips(input, this.matches);
  }

  matchesBlock(block) {
    let result = this.matches.indexOf(block.blockString) !== -1;
    return result;
  }

  processResult(input) {
    this.result = input.split('/').join('');
  }

  getAllRotations(input) {
    let results = [];

    let is3 = input.length === 9;
    let center = is3 ? input.substr(4, 1) : undefined;

    input = this.mapToRotatableString(input);
    results.push(input);

    for (let i = 1; i < input.length; i++) {
      let curr = input.substr(i) + input.substr(0, i);
      if (results.indexOf(curr) === -1) {
        results.push(curr);
      }
    }

    return results.map(el => this.mapFromRotatableString(el, center));
  }

  addAllFlips(input, arr) {
    if (input.length === 4) {
      return [];
    }

    let top = input.substr(0, 3);
    let middle = input.substr(3, 3);
    let bottom = input.substr(6, 3);

    let yFlip = bottom + middle + top;

    if (arr.indexOf(yFlip) === -1) {
      arr.push(yFlip);
    }

    top = top.split('');
    top.reverse();
    top = top.join('');

    bottom = bottom.split('');
    bottom.reverse();
    bottom = bottom.join('');

    middle = middle.split('');
    middle.reverse();
    middle = middle.join('');

    let xFlip = top + middle + bottom;
    if (arr.indexOf(xFlip) === -1) {
      arr.push(xFlip);
    }
  }

  mapToRotatableString(input) {
    if (input.length === 4) {
      return input.substr(0, 2) + input.substr(3, 1) + input.substr(2, 1);
    }

    let topRow = input.substr(0, 3);
    let bottomRow = input.substr(6, 3).split('');
    bottomRow.reverse();
    bottomRow = bottomRow.join('');

    return topRow + input.substr(5, 1) + bottomRow + input.substr(3, 1);
  }

  mapFromRotatableString(input, center) {
    if (input.length === 4) {
      return input.substr(0, 2) + input.substr(3, 1) + input.substr(2, 1);
    }

    let topRow = input.substr(0, 3);
    let bottomRow = input.substr(4, 3).split('');
    bottomRow.reverse();
    bottomRow = bottomRow.join('');
    return topRow + input.substr(7, 1) + center + input.substr(3, 1) + bottomRow;
  }
}

module.exports = Rule;