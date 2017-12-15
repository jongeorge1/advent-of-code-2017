let Generator = require('../../src/day15/generator');

describe('the generator module', () => {
  let sut;

  describe('when created', () => {

    beforeEach(() => {
      sut = new Generator(5, 10);
    });

    it('should set the current value to 5', () => {
      expect(sut.current).toBe(5);
    });

    it('should set the factor to 10', () => {
      expect(sut.factor).toBe(10);
    });
  });

  describe('when given the test values from AoC', () => {
    it('should return the expected values', () => {
      sut = new Generator(65, 16807);
      sut.generate();
      expect(sut.current).toBe(1092455);
      sut.generate();
      expect(sut.current).toBe(1181022009);
      sut.generate();
      expect(sut.current).toBe(245556042);
      sut.generate();
      expect(sut.current).toBe(1744312007);
      sut.generate();
      expect(sut.current).toBe(1352636452);
    });
  });

  describe('when given the test values from AoC using a divisor of 4', () => {
    it('should return the expected values', () => {
      sut = new Generator(65, 16807, 4);
      sut.generate();
      expect(sut.current).toBe(1352636452);
      sut.generate();
      expect(sut.current).toBe(1992081072);
      sut.generate();
      expect(sut.current).toBe(530830436);
      sut.generate();
      expect(sut.current).toBe(1980017072);
      sut.generate();
      expect(sut.current).toBe(740335192);
    });
  });

  describe('when asked for the current value as binary', () => {
    it('should return the binary equivalent of the number', () => {
      sut = new Generator(65, 16807);
      sut.generate();
      console.log(sut.current);
      expect(sut.currentBinary).toBe('00000000000100001010101101100111');
    })
  });

  describe('when asked for low 16 bits of the current value as binary', () => {
    it('should return expected binary number', () => {
      sut = new Generator(65, 16807);
      sut.generate();
      console.log(sut.current);
      expect(sut.currentBinaryLower16).toBe('1010101101100111');
    })
  });
});