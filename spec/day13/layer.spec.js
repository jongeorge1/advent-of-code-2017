let Layer = require('../../src/day13/layer');

describe('day 13 layer', () => {
  let input = '';
  let sut;

  describe('when initialised', () => {
    beforeEach(() => {
      sut = new Layer(1, 4);
    });

    it('should set its id to the specified value', () => {
      expect(sut.id).toBe(1);
    });

    it('should set its size to the specified value', () => {
      expect(sut.size).toBe(4);
    });
  });

  describe('when asked for hit severity', () => {
    it('should return depth multiplied by size', () => {
      sut = new Layer(2, 5);
      expect(sut.hitSeverity).toBe(10);
    });
  });

  describe('when told to position', () => {
    beforeEach(() => {
      sut = new Layer(1, 4);
    });

    it('after 0 it should return 0', () => {
      expect(sut.positionAfter(0)).toBe(0);
    });

    it('after 1 it should return 1', () => {
      expect(sut.positionAfter(1)).toBe(1);
    });

    it('after 2 it should return 2', () => {
      expect(sut.positionAfter(2)).toBe(2);
    });

    it('after 3 it should return 3', () => {
      expect(sut.positionAfter(3)).toBe(3);
    });

    it('after 4 it should return 2', () => {
      expect(sut.positionAfter(4)).toBe(2);
    });

    it('after 5 it should return 1', () => {
      expect(sut.positionAfter(5)).toBe(1);
    });

    it('after 6 it should return 0', () => {
      expect(sut.positionAfter(6)).toBe(0);
    });

    it('after 7 it should return 1', () => {
      expect(sut.positionAfter(7)).toBe(1);
    });
  });
});