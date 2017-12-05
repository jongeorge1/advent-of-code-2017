let Day05Part1 = require('../../src/day05/part1');

describe('day 5.1', () => {
  let sut;
  let data;
  let result;

  beforeEach(() => {
    sut = new Day05Part1();
  });

  describe('the step function', () => {
    describe('when told to step and the current instruction specifies no moves', () => {

      beforeEach(() => {
        data = ['0', '3', '0', '1', '-3'];
        result = sut.step(data, 0);
      });

      it('should return the same index', () => {
        expect(result).toBe(0);
      });

      it('should increment the value at the specified index', () => {
        expect(data[0]).toBe(1);
      });
    });

    describe('when told to step forward', () => {
      beforeEach(() => {
        data = [1, '3', '0', '1', '-3'];
        result = sut.step(data, 0);
      });

      it('returns the new position', () => {
        expect(result).toBe(1);
      });

      it('increments the value at the previous position', () => {
        expect(data[0]).toBe(2);
      });
    });

    describe('when told to step backward', () => {
      beforeEach(() => {
        data = [1, 4, '0', '1', '-3'];
        result = sut.step(data, 4);
      });

      it('returns the new position', () => {
        expect(result).toBe(1);
      });

      it('increments the value at the previous position', () => {
        expect(data[4]).toBe(-2);
      });
    });
  });

  describe('the process function', () => {
    describe('part 1 example', () => {
      it('should return 5', () => {
        let input = '0\r\n3\r\n0\r\n1\r\n-3';
        expect(sut.process(input)).toBe(5);
      });
    })
  });
});