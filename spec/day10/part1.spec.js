let Day10Part1 = require('../../src/day10/part1');

describe('day 10.1', () => {
  let input = '3, 4, 1, 5';
  
  beforeEach(() => {
    sut = new Day10Part1();
  });

  describe('the AoC test case', () => {
    it('it should produce the expected result', () => {
      expect(sut.process(input, 5)).toBe(12);
    });
  });
});