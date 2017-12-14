let Hasher = require('../../src/day14/hasher');

describe('the hasher module', () => {
  describe('the hash function', () => {
    it('should return the hex hash of the input', () => {
      let sut = new Hasher();
      let result = sut.hash('flqrgnkx-1');
    });
  });

  describe('the denseBlock function', () => {
    describe('when given an array of numbers', () => {
      it('should return the result of XORing them all together', () => {
        let sut = new Hasher(5);
        expect(sut.denseBlock([65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22])).toBe(64);
      });
    });
  });

  describe('the AoC test case', () => {
    describe('after the first iteration', () => {
      it('it should produce the expected result', () => {
        let sut = new Hasher(5);
        sut.hashCycle(3);
        expect(sut.state).toEqual([2, 1, 0, 3, 4]);
      });
    });

    describe('after the second iteration', () => {
      it('it should produce the expected result', () => {
        let sut = new Hasher(5);
        sut.hashCycle(3);
        sut.hashCycle(4);
        expect(sut.state).toEqual([4, 3, 0, 1, 2]);
      });
    });

    describe('after the third iteration', () => {
      it('it should produce the expected result', () => {
        let sut = new Hasher(5);
        sut.hashCycle(3);
        sut.hashCycle(4);
        sut.hashCycle(1);
        expect(sut.state).toEqual([4, 3, 0, 1, 2]);
      });
    });

    describe('after the fourth iteration', () => {
      it('it should produce the expected result', () => {
        let sut = new Hasher(5);
        sut.hashCycle(3);
        sut.hashCycle(4);
        sut.hashCycle(1);
        sut.hashCycle(5);
        expect(sut.state).toEqual([3, 4, 2, 1, 0]);
      });
    });
  });
});