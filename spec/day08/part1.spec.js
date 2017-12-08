let Day08Part1 = require('../../src/day08/part1');

describe('day 8.1', () => {
  let input = 'b inc 5 if a > 1\r\na inc 1 if b < 5\r\nc dec -10 if a >= 1\r\nc inc -20 if c == 10';
  
  beforeEach(() => {
    sut = new Day08Part1();
  });

  describe('when calling parseInputLine', () => {
    it('the returned function has the expected behaviour when the condition is true', () => {
      let fn = sut.parseInputLine('b inc 5 if a > 1');
      let registers = new Map();
      registers.set('b', 5);

      fn(registers);

      expect(registers.get('b')).toBe(5);
    });

    it('the returned function has the expected behaviour when the condition is false', () => {
      let fn = sut.parseInputLine('b inc 5 if a > 1');
      let registers = new Map();
      registers.set('a', 10);
      registers.set('b', 5);
      fn(registers);

      expect(registers.get('b')).toBe(10);
    });
  });

  describe('when calling parseInput', () => {
    beforeEach(() => {
      spyOn(sut, 'parseInputLine').and.returnValue('');
      sut.parseInput(input);
    });    
    
    it('should call parseInputLine for each row of the input', () => {
      expect(sut.parseInputLine).toHaveBeenCalled();
    });

    it('should push each parsed line onto the instructions array', () => {
      expect(sut.instructions.length).toBe(4);
    });
  });

  describe('when asked for the larget register value', () => {
    it('should return the expected value', () => {
      let map = new Map();
      map.set('a', 0);
      map.set('b', 10);
      map.set('c', -1);
      map.set('x', 5);
      sut.registers = map;

      expect(sut.largestValue()).toBe(10);
    });
  });

  describe('the AoC test case', () => {
    it('should return the expected value', () => {
      expect(sut.process(input)).toBe(1);
    });
  });
});