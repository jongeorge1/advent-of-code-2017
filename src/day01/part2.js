class Day01Part2 {
  process(input) {
    return input.split('').reduce((acc, el, idx, arr) => acc += +el === +arr[(idx + (arr.length / 2)) % arr.length] ? +el : 0, 0);
  }
}

module.exports = Day01Part2;