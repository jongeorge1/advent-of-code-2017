class Day01Part1 {
  process(input) {
    return input.split('').reduce((acc, el, idx, arr) => acc += +el === +arr[(idx + 1) % arr.length] ? +el : 0, 0);
  }
}

module.exports = Day01Part1;