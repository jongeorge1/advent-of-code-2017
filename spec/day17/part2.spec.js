let Day17Part2 = require('../../src/day17/part2');

describe('day 17.2', () => {
  let sut;

  beforeEach(() => {
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 638', () => {
        let sut = new Day17Part2();
        expect(sut.process(3, 9)).toBe(9);
      });
    });
  });
});