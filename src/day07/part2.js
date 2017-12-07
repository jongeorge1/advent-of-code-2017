let Program = require('./program');
let Tree = require('./tree');

class Day07Part2 {
  constructor() {
    this.programs = [];
  }

  findUnbalancedProgram(start) {
    if (start.isBalanced()) {
      return null;
    }

    let unbalancedChildren = start.children.filter(el => !el.isBalanced());
    if (unbalancedChildren.length === 0) {
      return start;
    }

    return this.findUnbalancedProgram(unbalancedChildren[0])
  }

  process(input) {
    let tree = new Tree(input);

    let unbalancedProgram = this.findUnbalancedProgram(tree.root);
    let totalWeights = unbalancedProgram.children.map(el => el.totalWeight());
    let sortedTotalWeights = totalWeights.slice().sort();
    // There'll be at least three here. If item 1 == item 0, then the first item should be returned, otherwise the last
    let oddOneOut = sortedTotalWeights[1] === sortedTotalWeights[0] ? sortedTotalWeights[sortedTotalWeights.length - 1] : sortedTotalWeights[0];
    let targetTotalWeight = sortedTotalWeights[1] === sortedTotalWeights[0] ? sortedTotalWeights[0] : sortedTotalWeights[sortedTotalWeights.length - 1];
    let oddChildOut = unbalancedProgram.children[totalWeights.indexOf(oddOneOut)];
    let weightDifference = targetTotalWeight - oddOneOut;
    return oddChildOut.weight + weightDifference;
  }
}

module.exports = Day07Part2;