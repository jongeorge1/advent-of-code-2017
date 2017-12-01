let Day01Part1 = require('../../src/day01/part1');

describe('day 1.1', () => {
  let sut;
  
  beforeEach(() => {
    sut = new Day01Part1();
  });

  describe('when the input has no matching characters', () => {
    it('should return 0', () => {
      expect(sut.process('1234')).toBe(0);
    });
  });

  describe('when the input has matching digits', () => {
    it('should return the sum of the matching digits', () => {
      expect(sut.process('1122')).toBe(3);
    });
  });

  describe('when all digits match', () => {
    it('should return the sum of all the digits', () => {
      expect(sut.process('1111')).toBe(4);
    });
  });

  describe('when only the first and last digits match', () => {
    it('should return the value of the final digit', () => {
      expect(sut.process('91212129')).toBe(9);
    })
  });
});