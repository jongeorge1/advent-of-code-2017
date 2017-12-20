let Day20Part2 = require('../../src/day20/part2');

describe('day 20.2', () => {
  let sut;

  beforeEach(() => {
    sut = new Day20Part2();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 1', () => {
        let input = 'p=<-6,0,0>, v=< 3,0,0>, a=< 0,0,0>\np=<-4,0,0>, v=< 2,0,0>, a=< 0,0,0>\np=<-2,0,0>, v=< 1,0,0>, a=< 0,0,0>\np=< 3,0,0>, v=<-1,0,0>, a=< 0,0,0>';
        expect(sut.process(input)).toBe(1);
      });
    });
  });
});


