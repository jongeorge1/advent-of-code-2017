class Day05Part1 {
  step(arr, index) {
    let val = arr[index] = +arr[index];
    arr[index]++;
    return index + val;
  }

  process(input) {
    let offsets = input.split('\r\n');
    let offsetsCount = offsets.length;
    let pos = 0;
    let steps = 0;

    while (pos >= 0 && pos < offsetsCount) {
      pos = this.step(offsets, pos);
      steps++;
    }

    return steps;
  }
}

module.exports = Day05Part1;