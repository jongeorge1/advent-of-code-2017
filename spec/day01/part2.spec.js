let Day01Part2 = require('../../src/day01/part2');

describe('day 1.1', () => {
  let sut;
  
  beforeEach(() => {
    sut = new Day01Part2();
  });

  describe('when the input has no matching characters', () => {
    it('should return 0', () => {
      expect(sut.process('1221')).toBe(0);
    });
  });

  describe('when the input has matching digits', () => {
    it('should return the sum of the matching digits', () => {
      expect(sut.process('123425')).toBe(4);
    });
  });

  describe('when all digits match', () => {
    it('should return the sum of all the digits', () => {
      expect(sut.process('1212')).toBe(6);
    });
  });

  describe('AoC test case 4', () => {
    it('should return the expected result', () => {
      expect(sut.process('123123')).toBe(12);
    })
  });

  describe('AoC test case 5', () => {
    it('should return the expected result', () => {
      expect(sut.process('12131415')).toBe(4);
    })
  });
});