let Day18Part2 = require('../../src/day18/part2');

describe('day 18.1', () => {
  let sut;

  beforeEach(() => {
    sut = new Day18Part2();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 638', () => {
        let input = 'snd 1\nsnd 2\nsnd p\nrcv a\nrcv b\nrcv c\nrcv d';
        expect(sut.process(input)).toBe(3);
      });
    });
  });
});