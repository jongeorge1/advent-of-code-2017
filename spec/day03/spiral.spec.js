let spiral = require('../../src/day03/spiral');

describe('the spiral function', () => {
  it('1 => (0, 0)', () => {
    let result = spiral(1);
    expect(result).toEqual({ x: 0, y: -0 }); // WTF is -0?
  });

  it('2 => (1, 0)', () => {
    let result = spiral(2);
    expect(result).toEqual({ x: 1, y: 0 });
  });

  it('3 => (1, 1)', () => {
    let result = spiral(3);
    expect(result).toEqual({ x: 1, y: 1 });
  });

  it('4 => (0, 1)', () => {
    let result = spiral(4);
    expect(result).toEqual({ x: 0, y: 1 });
  });

  it('5 => (-1, 1)', () => {
    let result = spiral(5);
    expect(result).toEqual({ x: -1, y: 1 });
  });

  it('6 => (-1, 0)', () => {
    let result = spiral(6);
    expect(result).toEqual({ x: -1, y: 0 });
  });

  it('7 => (-1, 0)', () => {
    let result = spiral(7);
    expect(result).toEqual({ x: -1, y: -1 });
  });

  it('10 => (2, -1)', () => {
    let result = spiral(10);
    expect(result).toEqual({ x: 2, y: -1 });
  });
});