let Day17Part1 = require('../../src/day17/part1');

describe('day 17.1', () => {
  let sut;

  beforeEach(() => {
  });

  describe('when created', () => {
    beforeEach(() => {
      sut = new Day17Part1();
    });
    
    it('should have size = 1', () => {
      expect(sut.buffer.length).toBe(1);
    })

    it('should contain a 0', () => {
      expect(sut.buffer[0]).toBe(0);
    });
  });

  describe('the AoC test case', () => {
    describe('when told to process', () => {
      it('should return 638', () => {
        expect(sut.process(3)).toBe(638);
      });
    });
  });
});