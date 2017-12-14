let Day14Part1 = require('../../src/day14/part1');

describe('day 14.1', () => {
  beforeEach(() => {
    sut = new Day14Part1();
  });

  describe('the hex to binary function', () => {
    it('should convert a0c2017 to the expected value', () => {
      let result = sut.stringToBinary('a0c2017');
      expect(result).toBe('1010000011000010000000010111');
    })
  });

  describe('the AoC test case', () => {
    it('should return 8108', () => {
      let result = sut.process('flqrgnkx');
      expect(result).toBe(8108);
    });
  });
});