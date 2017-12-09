class Day09Part2 {
  process(input) {
    let totalGarbageCharacters = 0;
    let inGarbageSection = false;

    for (let i = 0; i < input.length; i++) {
      switch (input[i]) {
        case '<':
          if (inGarbageSection) {
            totalGarbageCharacters++;
          }
          inGarbageSection = true;
          break;
        case '>':
          if (inGarbageSection) {
            inGarbageSection = false;
          }
          break;
        case '!':
          i++;
          break;
        default:
          if (inGarbageSection) {
            totalGarbageCharacters++;
          }
          break;
      }
    }

    return totalGarbageCharacters;
  }
}

module.exports = Day09Part2;