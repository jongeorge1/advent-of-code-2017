let spiral = require('../../src/day03/spiral');

describe('the spiral function', () => {
  it('1 => (0, 0)', () => {
    let result = spiral(1);
    expect(result.x).toBe(0);
    expect(result.y).toBe(0);
  });

  it('2 => (1, 0)', () => {
    let result = spiral(2);
    expect(result.x).toBe(1);
    expect(result.y).toBe(0);
  });

  it('3 => (1, 1)', () => {
    let result = spiral(3);
    expect(result.x).toBe(1);
    expect(result.y).toBe(1);
  });

  it('4 => (0, 1)', () => {
    let result = spiral(4);
    expect(result.x).toBe(0);
    expect(result.y).toBe(1);
  });

  it('5 => (-1, 1)', () => {
    let result = spiral(5);
    expect(result.x).toBe(-1);
    expect(result.y).toBe(1);
  });

  it('6 => (-1, 0)', () => {
    let result = spiral(6);
    expect(result.x).toBe(-1);
    expect(result.y).toBe(0);
  });

  it('7 => (-1, 0)', () => {
    let result = spiral(7);
    expect(result.x).toBe(-1);
    expect(result.y).toBe(-1);
  });

  it('10 => (2, -1)', () => {
    let result = spiral(10);
    expect(result.x).toBe(2);
    expect(result.y).toBe(-1);
  });
});