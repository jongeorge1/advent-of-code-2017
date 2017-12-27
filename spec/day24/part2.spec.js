let Day24Part2 = require('../../src/day24/part2');

describe('day 24.1', () => {
  let sut;

  beforeEach(() => {
    sut = new Day24Part2();
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 19', () => {
        let input = '0/2\r\n2/2\r\n2/3\r\n3/4\r\n3/5\r\n0/1\r\n10/1\r\n9/10';
        expect(sut.process(input)).toBe(19);
      });
    });
  });
});


