let Day05Part2 = require('../../src/day05/part2');

describe('day 5.1', () => {
  let sut;
  let data;
  let result;

  beforeEach(() => {
    sut = new Day05Part2();
  });

  describe('the step function', () => {
    describe('when told to step and the current instruction is higher than 2', () => {

      beforeEach(() => {
        data = [0, '3', '0', '1', '-3'];
        result = sut.step(data, 1);
      });

      it('should return the new position', () => {
        expect(result).toBe(4);
      });

      it('should decrement the value at the specified index', () => {
        expect(data[1]).toBe(2);
      });
    });

    describe('when told to step and the current instruction is lower than 3', () => {
      beforeEach(() => {
        data = [1, '3', '0', '1', '-3'];
        result = sut.step(data, 0);
      });

      it('returns the new position', () => {
        expect(result).toBe(1);
      });

      it('should decrement the value at the previous position', () => {
        expect(data[0]).toBe(2);
      });
    });
  });

  describe('the process function', () => {
    describe('part 2 example', () => {
      it('should return 10', () => {
        let input = '0\r\n3\r\n0\r\n1\r\n-3';
        expect(sut.process(input)).toBe(10);
      });
    })
  });
});