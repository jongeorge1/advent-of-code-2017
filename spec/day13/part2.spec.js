let Day13Part2 = require('../../src/day13/part2');

describe('day 13.1', () => {
  let input = '0: 3\r\n1: 2\r\n4: 4\r\n6: 4';

  beforeEach(() => {
    sut = new Day13Part2();
  });

  describe('the AoC test case', () => {
    it('should return 10', () => {
      let result = sut.process(input);
      expect(result).toBe(10);
    });
  });
});