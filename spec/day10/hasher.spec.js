let Hasher = require('../../src/day10/hasher');

describe('the hasher module', () => {
  describe('the denseBlock function', () => {
    it('should behave as expected', () => {
      let sut = new Hasher(5);
      expect(sut.denseBlock([65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22])).toBe(64);
    });
  });

  describe('the AoC test case', () => {
    describe('after the first iteration', () => {
      it('it should produce the expected result', () => {
        let sut = new Hasher(5);
        sut.hash(3);
        expect(sut.state).toEqual([2, 1, 0, 3, 4]);
      });
    });

    describe('after the second iteration', () => {
      it('it should produce the expected result', () => {
        let sut = new Hasher(5);
        sut.hash(3);
        sut.hash(4);
        expect(sut.state).toEqual([4, 3, 0, 1, 2]);
      });
    });

    describe('after the third iteration', () => {
      it('it should produce the expected result', () => {
        let sut = new Hasher(5);
        sut.hash(3);
        sut.hash(4);
        sut.hash(1);
        expect(sut.state).toEqual([4, 3, 0, 1, 2]);
      });
    });

    describe('after the fourth iteration', () => {
      it('it should produce the expected result', () => {
        let sut = new Hasher(5);
        sut.hash(3);
        sut.hash(4);
        sut.hash(1);
        sut.hash(5);
        expect(sut.state).toEqual([3, 4, 2, 1, 0]);
      });
    });
  });
});