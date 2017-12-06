let Day06Part2 = require('../../src/day06/part2');

describe('day 6.1', () => {
  let sut;
  let data;
  let result;

  beforeEach(() => {
    sut = new Day06Part2();
  });

  describe('the AoC test case', () => {
    it('should return 4', () => {
      expect(sut.process('0\t2\t7\t0')).toBe(4);
    });
  });
});