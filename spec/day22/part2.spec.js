let Day22Part1 = require('../../src/day22/part2');

describe('day 22.2', () => {
  let sut;

  beforeEach(() => {
    sut = new Day22Part1();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 26', () => {
        let input = '..#\r\n#..\r\n...';
        expect(sut.process(input, 100)).toBe(26);
      });
    });
  });
});


