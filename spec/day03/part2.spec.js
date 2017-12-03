let Day03Part2 = require('../../src/day03/part2');

describe('day 3.2', () => {
  let sut;
  
  beforeEach(() => {
    sut = new Day03Part2();
  });

  describe('the populate value function', () => {
    it('Square 1 => 1', () => {
      expect(sut.populateValue(1)).toBe(1);
    });

    it('Square 2 => 1', () => {
      expect(sut.populateValue(2)).toBe(1);
    });
    it('Square 1 => 1', () => {
      expect(sut.populateValue(1)).toBe(1);
    });

    it('Square 2 => 1', () => {
      expect(sut.populateValue(2)).toBe(1);
    });

    it('Square 3 => 2', () => {
      sut.populateValue(1);
      sut.populateValue(2);
      expect(sut.populateValue(3)).toBe(2);
    });

    it('Square 4 => 4', () => {
      sut.populateValue(1);
      sut.populateValue(2);
      sut.populateValue(3);
      expect(sut.populateValue(4)).toBe(4);
    });

    it('Square 5 => 5', () => {
      for (var i = 1; i < 5; i++) {
        sut.populateValue(i);
      }

      expect(sut.populateValue(5)).toBe(5);
    });

    it('Square 10 => 26', () => {
      for (var i = 1; i < 10; i++) {
        sut.populateValue(i);
      }

      expect(sut.populateValue(10)).toBe(26);
    });
  });

  describe('the process function', () => {
    it('300 => 304', () => {
      expect(sut.process('300')).toBe(304);
    })

    it('700 => 747', () => {
      expect(sut.process('700')).toBe(747);
    })
  });
});