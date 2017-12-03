class Day02Part2 {
  process(input) {
    return input.split('\r\n').reduce((acc, el, idx, arr) => {
      let numbers = el.split('\t').filter(el => !isNaN(parseInt(el)));
      
      let divisors = numbers.reduce((acc, el, idx, arr) => {
        let otherNumbers = numbers.slice();
        otherNumbers.splice(idx, 1);
        acc.push(...otherNumbers.map(el => numbers[idx] / el));
        return acc;
      }, []);

      let rowResult = divisors.filter(el => Number.isInteger(el))[0];
      return acc += rowResult;
    }, 0);
  }
}

module.exports = Day02Part2;