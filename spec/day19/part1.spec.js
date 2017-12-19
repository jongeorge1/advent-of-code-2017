let Day19Part1 = require('../../src/day19/part1');

describe('day 18.1', () => {
  let sut;

  beforeEach(() => {
    sut = new Day19Part1();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return ABCDEF', () => {
        let input = '     |          \n     |  +--+    \n     A  |  C    \n F---|--|-E---+ \n     |  |  |  D \n     +B-+  +--+ ';
        expect(sut.process(input)).toBe('ABCDEF');
      });
    });
  });
});


