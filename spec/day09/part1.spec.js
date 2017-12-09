let Day09Part1 = require('../../src/day09/part1');

describe('day 9.1', () => {
  let input = '';
  
  beforeEach(() => {
    sut = new Day09Part1();
  });

  describe('single group with no contents', () => {
    it('should return 1', () => {
      expect(sut.process('{}')).toBe(1);
    });
  })

  describe('nested groups', () => {
    it('should return 6', () => {
      expect(sut.process('{{{}}}')).toBe(6);
    });
  })

  describe('multiple nested groups', () => {
    it('should return 5', () => {
      expect(sut.process('{{},{}}')).toBe(5);
    });
  })

  describe('multiple nested groups 2', () => {
    it('should return 5', () => {
      expect(sut.process('{{{},{},{{}}}}')).toBe(16);
    });
  })

  describe('group containing garbage', () => {
    it('should return 1', () => {
      expect(sut.process('{<a>,<a>,<a>,<a>}')).toBe(1);
    });
  })

  describe('nested groups containing garbage', () => {
    it('should return 9', () => {
      expect(sut.process('{{<ab>},{<ab>},{<ab>},{<ab>}}')).toBe(9);
    });
  })

  describe('nested groups containing garbage 2', () => {
    it('should return 9', () => {
      expect(sut.process('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toBe(9);
    });
  })

  describe('nested groups containing garbage and !', () => {
    it('should return 3', () => {
      expect(sut.process('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toBe(3);
    });
  })
});