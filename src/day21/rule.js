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
    results.push(...this.getRotations(rows.join('')));

    rows.reverse();
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
}

module.exports = Rule;