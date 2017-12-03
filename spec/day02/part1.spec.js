let Day02Part1 = require('../../src/day02/part1');

describe('day 2.1', () => {
  let sut;
  let testInput = '5\t1\t9\t5\r\n7\t5\t3\t \r\n2\t4\t6\t8';
  
  beforeEach(() => {
    sut = new Day02Part1();
  });

  describe('given the test input', () => {
    it('should return the expected checksum', () => {
      expect(sut.process(testInput)).toBe(18);
    });
  });

});