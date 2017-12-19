let Day19Part2 = require('../../src/day19/part2');

describe('day 18.2', () => {
  let sut;

  beforeEach(() => {
    sut = new Day19Part2();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 38', () => {
        let input = '     |          \n     |  +--+    \n     A  |  C    \n F---|--|-E---+ \n     |  |  |  D \n     +B-+  +--+ ';
        expect(sut.process(input)).toBe(38);
      });
    });
  });
});


