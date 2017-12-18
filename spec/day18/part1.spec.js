let Day18Part1 = require('../../src/day18/part1');

describe('day 18.1', () => {
  let sut;

  beforeEach(() => {
    sut = new Day18Part1();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 638', () => {
        let input = 'set a 1\nadd a 2\nmul a a\nmod a 5\nsnd a\nset a 0\nrcv a\njgz a -1\nset a 1\njgz a -2';
        expect(sut.process(input)).toBe(4);
      });
    });
  });
});