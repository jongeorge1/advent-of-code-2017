let Day04Part1 = require('../../src/day04/part1');

describe('day 4.1', () => {
  let sut;
  
  beforeEach(() => {
    sut = new Day04Part1();
  });

  describe('isValid function', () => {
    it('passphrase with no repeating groups is valid', () => {
      expect(sut.isValid('aa bb cc dd ee')).toBe(true);
    });

    it('passphrase with a repeating group is not valid', () => {
      expect(sut.isValid('aa bb cc dd aa')).toBe(false);
    });

    it('passphrase where some words contain other words is valid', () => {
      expect(sut.isValid('aa bb cc dd aaa')).toBe(true);
    });
  });

});