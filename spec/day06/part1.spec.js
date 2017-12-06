let Day06Part1 = require('../../src/day06/part1');

describe('day 6.1', () => {
  let sut;
  let data;
  let result;

  beforeEach(() => {
    sut = new Day06Part1();
  });

  describe('the AoC test case', () => {
    it('should return 5', () => {
      expect(sut.process('0\t2\t7\t0')).toBe(5);
    });
  });

  describe('the cycle method', () => {
    it('should return the expected value at step 1 in the test case', () => {
      expect(sut.cycle([0, 2, 7, 0])).toEqual([2, 4, 1, 2]);
    });

    it('should return the expected value at step 2 in the test case', () => {
      expect(sut.cycle([2, 4, 1, 2])).toEqual([3, 1, 2, 3]);
    });

    it('should return the expected value at step 3 in the test case', () => {
      expect(sut.cycle([3, 1, 2, 3])).toEqual([0, 2, 3, 4]);
    });

    it('should return the expected value at step 4 in the test case', () => {
      expect(sut.cycle([0, 2, 3, 4])).toEqual([1, 3, 4, 1]);
    });

    it('should return the expected value at step 4 in the test case', () => {
      expect(sut.cycle([1, 3, 4, 1])).toEqual([2, 4, 1, 2]);
    });    
  });
});