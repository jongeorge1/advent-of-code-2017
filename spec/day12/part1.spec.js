let Day12Part1 = require('../../src/day12/part1');

describe('day 12.1', () => {
  let input = '';

  beforeEach(() => {
    sut = new Day12Part1();
  });

  describe('the AoC test case', () => {
    it('should return 6', () => {
      let result = sut.process('0 <-> 2\r\n1 <-> 1\r\n2 <-> 0, 3, 4\r\n3 <-> 2, 4\r\n4 <-> 2, 3, 6\r\n5 <-> 6\r\n6 <-> 4, 5');
      expect(result).toBe(6);
    });
  });
});