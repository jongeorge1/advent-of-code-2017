let Day08Part2 = require('../../src/day08/part2');

describe('day 8.1', () => {
  let input = 'b inc 5 if a > 1\r\na inc 1 if b < 5\r\nc dec -10 if a >= 1\r\nc inc -20 if c == 10';
  
  beforeEach(() => {
    sut = new Day08Part2();
  });

  describe('the AoC test case', () => {
    it('should return the expected value', () => {
      expect(sut.process(input)).toBe(10);
    });
  });
});