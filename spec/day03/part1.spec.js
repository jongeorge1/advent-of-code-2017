let Day03Part1 = require('../../src/day03/part1');

describe('day 3.1', () => {
  let sut;
  
  beforeEach(() => {
    sut = new Day03Part1();
  });

  describe('for square 1', () => {
    it('should return 0', () => {
      expect(sut.process('1')).toBe(0);
    })
  });

  describe('for square 12', () => {
    it('should return 3', () => {
      expect(sut.process('12')).toBe(3);
    })
  });

  describe('for square 23', () => {
    it('should return 2', () => {
      expect(sut.process('23')).toBe(2);
    })
  });

  describe('for square 1024', () => {
    it('should return 31', () => {
      expect(sut.process('1024')).toBe(31);
    })
  });
});