let Day13Part1 = require('../../src/day13/part1');

describe('day 13.1', () => {
  let input = '0: 3\r\n1: 2\r\n4: 4\r\n6: 4';

  beforeEach(() => {
    sut = new Day13Part1();
  });

  describe('the AoC test case', () => {
    it('should return 24', () => {
      let result = sut.process(input);
      expect(result).toBe(24);
    });
  });
});