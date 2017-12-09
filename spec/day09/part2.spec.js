let Day09Part2 = require('../../src/day09/part2');

describe('day 9.2', () => {
  let input = '';
  
  beforeEach(() => {
    sut = new Day09Part2();
  });

  describe('single garbage group with no contents', () => {
    it('should return ', () => {
      expect(sut.process('<>')).toBe(0);
    });
  })

  describe('garbage group with contents', () => {
    it('should return 17', () => {
      expect(sut.process('<random characters>')).toBe(17);
    });
  })

  describe('garbage group with garbage open characters', () => {
    it('should return 3', () => {
      expect(sut.process('<<<<>')).toBe(3);
    });
  })

  describe('garbage group with control characters 1', () => {
    it('should return ', () => {
      expect(sut.process('<{!>}')).toBe(2);
    });
  })

  describe('garbage group with control characters 2', () => {
    it('should return 0', () => {
      expect(sut.process('<!!>')).toBe(0);
    });
  })

  describe('garbage group with control characters 3', () => {
    it('should return 0', () => {
      expect(sut.process('<!!!>>')).toBe(0);
    });
  })

  describe('garbage group with control characters 4', () => {
    it('should return 10', () => {
      expect(sut.process('<{o"i!a,<{i<a>')).toBe(10);
    });
  })
});