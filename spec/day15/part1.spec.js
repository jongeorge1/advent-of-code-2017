let Day15Part1 = require('../../src/day15/part1');

describe('day 14.1', () => {
  beforeEach(() => {
    sut = new Day15Part1();
  });

  describe('the AoC test case', () => {
    describe('when told to find the number of matches in the first 5 iterations', () => {
      it('should return 1', () => {
        expect(sut.process(65, 8921, 5)).toBe(1);
      });
    });

    // it('should return 8108', () => {
    //   let result = sut.process('flqrgnkx');
    //   expect(result).toBe(8108);
    // });
  });
});