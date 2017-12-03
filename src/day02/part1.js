class Day02Part1 {
  process(input) {
    return input.split('\r\n').reduce((acc, el, idx, arr) => {
      let numbers = el.split('\t').filter(el => !isNaN(parseInt(el)));
      return acc += (Math.max(...numbers) - Math.min(...numbers));
    }, 0);
  }
}

module.exports = Day02Part1;