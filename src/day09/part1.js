class Day09Part1 {
  process(input) {
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