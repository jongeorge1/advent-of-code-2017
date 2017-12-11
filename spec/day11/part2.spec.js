let Day11Part2 = require('../../src/day11/part2');

describe('day 11.2', () => {
  let input = '';
  
  beforeEach(() => {
    sut = new Day11Part2();
  });

  describe('when told to find the furthest distance from home', () => {
    it('test case 1 => 3', () => {
      sut.followPath(['ne', 'ne', 'ne']);
      expect(sut.furthestDistanceFromHome).toBe(3);
    });

    it('test case 2 => 2', () => {
      sut.followPath(['ne', 'ne', 'sw', 'sw']);
      expect(sut.furthestDistanceFromHome).toBe(2);
    });

    it('test case 3 => 2', () => {
      sut.followPath(['ne', 'ne', 's', 's']);
      expect(sut.furthestDistanceFromHome).toBe(2);
    });

    it('test case 4 => 3', () => {
      sut.followPath(['se', 'sw', 'se', 'sw', 'sw']);
      expect(sut.furthestDistanceFromHome).toBe(3);
    });
  });});