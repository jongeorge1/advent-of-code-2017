let Day20Part1 = require('../../src/day20/part1');

describe('day 20.1', () => {
  let sut;

  beforeEach(() => {
    sut = new Day20Part1();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 0', () => {
        let input = 'p=< 3,0,0>, v=< 2,0,0>, a=<-1,0,0>\np=< 4,0,0>, v=< 0,0,0>, a=<-2,0,0>';
        expect(sut.process(input)).toBe(0);
      });
    });
  });
});


