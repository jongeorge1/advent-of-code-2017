let Day11Part1 = require('../../src/day11/part1');

describe('day 11.1', () => {
  let input = '';

  beforeEach(() => {
    sut = new Day11Part1();
  });

  describe('when told to take a step', () => {
    describe('n', () => {
      it('should increase y by 2', () => {
        sut.step('n');
        expect(sut.position).toEqual({
          x: 0,
          y: 2
        });
      });
    });

    describe('s', () => {
      it('should decrease y by 2', () => {
        sut.step('s');
        expect(sut.position).toEqual({
          x: 0,
          y: -2
        });
      });
    });

    describe('ne', () => {
      it('should increase x by 1 and y by 1', () => {
        sut.step('ne');
        expect(sut.position).toEqual({
          x: 1,
          y: 1
        });
      });
    });

    describe('se', () => {
      it('should increase x by 1 and y by -1', () => {
        sut.step('se');
        expect(sut.position).toEqual({
          x: 1,
          y: -1
        });
      });
    });

    describe('nw', () => {
      it('should increase x by -1 and y by 1', () => {
        sut.step('nw');
        expect(sut.position).toEqual({
          x: -1,
          y: 1
        });
      });
    });

    describe('sw', () => {
      it('should increase x by -1 and y by -1', () => {
        sut.step('sw');
        expect(sut.position).toEqual({
          x: -1,
          y: -1
        });
      });
    });
  });

  describe('when told to take a series of steps', () => {
    it('should call the step method for each step', () => {
      spyOn(sut, 'step');
      sut.followPath(['ne', 'ne', 'ne'])
      expect(sut.step.calls.count()).toBe(3);
    });
  });

  describe('when told to calculate the moves to home', () => {
    it('test case 1 => 3', () => {
      sut.followPath(['ne', 'ne', 'ne']);
      expect(sut.movesFromHome).toBe(3);
    });

    it('test case 2 => 0', () => {
      sut.followPath(['ne', 'ne', 'sw', 'sw']);
      expect(sut.movesFromHome).toBe(0);
    });

    it('test case 3 => 2', () => {
      sut.followPath(['ne', 'ne', 's', 's']);
      expect(sut.movesFromHome).toBe(2);
    });

    it('test case 4 => 3', () => {
      sut.followPath(['se', 'sw', 'se', 'sw', 'sw']);
      expect(sut.movesFromHome).toBe(3);
    });
  });
});