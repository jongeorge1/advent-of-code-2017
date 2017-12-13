class Day09Part1 {
  process(input) {
    let fns = {
      '{': acc => { if (!acc.inGarbageSection) acc.totalScore += ++acc.currentDepth; return acc; },
      '}': acc => { if (!acc.inGarbageSection) acc.currentDepth--; return acc; },
      '<': acc => { acc.inGarbageSection = true; return acc; },
      '>': acc => { acc.inGarbageSection = false; return acc; },
      '!': acc => { acc.skipNext = true; return acc; },
      'skip': acc => { acc.skipNext = false; return acc },
      'noop': acc => acc,
      'get': (acc, el) => acc.skipNext ? fns.skip : fns[el] || fns.noop
    };

    let result = input.split('').reduce((acc, el) => fns.get(acc, el)(acc), { inGarbageSection: false, currentDepth: 0, totalScore: 0, skipNext: false });
    return result.totalScore;
  }

  processv1(input) {
    let currentDepth = 0;
    let totalScore = 0;
    let inGarbageSection = false;

    for (let i = 0; i < input.length; i++) {
      switch (input[i]) {
        case '{':
          if (!inGarbageSection) {
            totalScore += ++currentDepth;
            totalScore;
          }
          break;
        case '}':
          if (!inGarbageSection) {
            currentDepth--;
          }
          break;
        case '<':
          inGarbageSection = true;
          break;
        case '>':
          inGarbageSection = false;
          break;
        case '!':
          i++;
          break;
      }
    }

    return totalScore;
  }
}

module.exports = Day09Part1;