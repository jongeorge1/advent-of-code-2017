class Rule {
  constructor(input) {
    if (input) {
      let components = input.split(' => ');
      this.input = input;
      this.processRule(components[0]);
      this.processResult(components[1]);
    }
  }

  processRule(input) {
    this.matches = this.getAllRotations(input);
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

    let rows = input.split('/');
rows;
    results.push(...this.getRotations(rows.join('')));

    // rows = rows.map(el => {
    //   let x = el.split('');
    //   x.reverse();
    //   return x.join('');
    // });
rows;
    rows.reverse();
    rows;
    
    results.push(...this.getRotations(rows.join('')));

    results = new Set(results);
    results = Array.from(results);
    return results;
  }

  getRotations(input) {
    let results = [];
    input;

    if (input.length === 4) {
      return [
        input,
        input[2] + input[0] + input[3] + input[1],
        input[3] + input[2] + input[1] + input[0],
        input[1] + input[3] + input[0] + input[2]
      ]
    }

    return [
      input,
      input[6] + input[3] + input[0] + input[7] + input[4] + input[1] + input[8] + input[5] + input[2],
      input[8] + input[7] + input[6] + input[5] + input[4] + input[3] + input[2] + input[1] + input[0],
      input[2] + input[5] + input[8] + input[1] + input[4] + input[7] + input[0] + input[3] + input[6]
    ]

    return [input];
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