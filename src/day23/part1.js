class Day23Part1 {
  process(input) {
    return Math.pow(+input.split('\r\n')[0].split(' ')[2] - 2, 2);
  }
}

module.exports = Day23Part1;