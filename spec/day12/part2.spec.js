let Day12Part2 = require('../../src/day12/part2');

describe('day 12.2', () => {
  let input = '';

  beforeEach(() => {
    sut = new Day12Part2();
  });

  describe('the AoC test case', () => {
    it('should return 2', () => {
      let result = sut.process('0 <-> 2\r\n1 <-> 1\r\n2 <-> 0, 3, 4\r\n3 <-> 2, 4\r\n4 <-> 2, 3, 6\r\n5 <-> 6\r\n6 <-> 4, 5');
      expect(result).toBe(2);
    });
  });
});