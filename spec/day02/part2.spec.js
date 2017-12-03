let Day02Part2 = require('../../src/day02/part2');

describe('day 2.2', () => {
  let sut;
  let testInput = '5\t9\t2\t8\r\n9\t4\t7\t3\r\n3\t8\t6\t5';
  
  beforeEach(() => {
    sut = new Day02Part2();
  });

  describe('given the test input', () => {
    it('should return the expected checksum', () => {
      expect(sut.process(testInput)).toBe(9);
    });
  });

});