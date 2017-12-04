let Day04Part2 = require('../../src/day04/part2');

describe('day 4.2', () => {
  let sut;
  
  beforeEach(() => {
    sut = new Day04Part2();
  });

  describe('isValid function', () => {
    it('passphrase with no repeating anagram groups is valid', () => {
      expect(sut.isValid('abcde fghij')).toBe(true);
    });

    it('passphrase with a repeating anagram group is not valid', () => {
      expect(sut.isValid('abcde xyz ecdab')).toBe(false);
    });

    it('passphrase where some words contain anagrams of other words is valid', () => {
      expect(sut.isValid('a ab abc abd abf abj')).toBe(true);
    });

    it('example 4', () => {
      expect(sut.isValid('iiii oiii ooii oooi oooo')).toBe(true);
    });

    it('example 5', () => {
      expect(sut.isValid('oiii ioii iioi iiio')).toBe(false);
    });
  });

});