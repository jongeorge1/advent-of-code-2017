let Day15Part1 = require('../../src/day15/part1');

describe('day 14.1', () => {
  beforeEach(() => {
    sut = new Day15Part1();
  });

  describe('the AoC test case', () => {
    describe('when told to find the number of matches in the first 1056 iterations', () => {
      it('should return 1', () => {
        expect(sut.process(65, 8921, 1056)).toBe(1);
      });
    });
  });
});