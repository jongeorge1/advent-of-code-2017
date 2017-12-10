let Day10Part2 = require('../../src/day10/part2');

describe('day 10.2', () => {
  let input = '1,2,3';
  
  beforeEach(() => {
    sut = new Day10Part2();
  });

  describe('the input array processor', () => {
    it('should behave as expected', () => {
      expect(sut.buildLengthsArray(input)).toEqual([49, 44, 50, 44, 51,17, 31, 73, 47, 23]);
    });
  });

  describe('AoC test case 1', () => {
    it('should return the expected value', () => {
      expect(sut.process('')).toBe('a2582a3a0e66e6e86e3812dcb672a272');
    });
  });

  describe('AoC test case 2', () => {
    it('should return the expected value', () => {
      expect(sut.process('AoC 2017')).toBe('33efeb34ea91902bb2f59c9920caa6cd');
    });
  });

  describe('AoC test case 3', () => {
    it('should return the expected value', () => {
      expect(sut.process('1,2,3')).toBe('3efbe78a8d82f29979031a4aa0b16a9d');
    });
  });

  describe('AoC test case 4', () => {
    it('should return the expected value', () => {
      expect(sut.process('1,2,4')).toBe('63960835bcdc130f0b66d7ff4f6a5a8e');
    });
  });
});