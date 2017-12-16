let Day16Part1 = require('../../src/day16/part1');

describe('day 16.1', () => {
  let sut;

  beforeEach(() => {
  });

  describe('when created', () => {
    it('should contain the expected items', () => {
      sut = new Day16Part1(5);
      expect(sut.line).toBe('abcde');
    });
  });

  describe('the AoC test cases', () => {
    describe('when told to spen the last item', () => {
      it('should move the last item to the start', () => {
        sut = new Day16Part1(5);
        sut.spin(1);
        expect(sut.line).toBe('eabcd');
      });
    });

    describe('when told to exchange the last two items', () => {
      it('should move the last item to the start', () => {
        sut = new Day16Part1(5);
        sut.spin(1);
        sut.exchange(3, 4);
        expect(sut.line).toBe('eabdc');
      });
    });

    describe('when told to partner e and b', () => {
      it('should swap the positions of e and b', () => {
        sut = new Day16Part1(5);
        sut.spin(1);
        sut.exchange(3, 4);
        sut.partner('e', 'b');
        expect(sut.line).toBe('baedc');
      });
    });

    describe('when given the specified input', () => {
      it('should return the expected result', () => {
        sut = new Day16Part1(5);
        expect(sut.process('s1,x3/4,pe/b')).toBe('baedc');
      });
    });
  });
});