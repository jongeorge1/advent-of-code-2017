class Day04Part1 {
  isValid(input) {
    return input.split(' ').map(word => [...word].sort().join()).filter((el, idx, arr) => arr.lastIndexOf(el) !== idx).length === 0;
  }

  process(input) {
    return input.split('\r\n').filter(el => this.isValid(el)).length;
  }
}

module.exports = Day04Part1;