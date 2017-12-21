let Day21Part1 = require('../../src/day21/part1');

describe('day 20.1', () => {
  let sut;

  beforeEach(() => {
    sut = new Day21Part1();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 0', () => {
        let input = '../.# => ##./#../...\r\n.#./..#/### => #..#/..../..../#..#';
        expect(sut.process(input, 2)).toBe(12);
      });
    });
  });
});


