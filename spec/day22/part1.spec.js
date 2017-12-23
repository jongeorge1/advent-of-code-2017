let Day22Part1 = require('../../src/day22/part1');

describe('day 22.1', () => {
  let sut;

  beforeEach(() => {
    sut = new Day22Part1();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 5587', () => {
        let input = '..#\r\n#..\r\n...';
        expect(sut.process(input)).toBe(5587);
      });
    });
  });
});


