let Map = require('../../src/day22/map');

describe('day 22 map class', () => {
  let sut;

  beforeEach(() => {
    sut = new Map('..#\r\n#..\r\n...');
  });

  describe('when created', () => {
    it('should contain the expected number of infected blocks', () => {
      expect(sut.infected.length).toBe(2);
    });

    it('should contain infected blocks at the expected positions', () => {
      expect(sut.isInfected(1, -1)).toBe(true);
      expect(sut.isInfected(-1, 0)).toBe(true);
    });

    it('should have add infected count of 0', () => {
      expect(sut.addInfectedCount).toBe(0);
    });
  });

  describe('when told to clear a cell', () => {
    beforeEach(() => {
      sut.clearInfected(1, -1);
    });

    it('should set the cell to uninfected', () => {
      expect(sut.infected.length).toBe(1);
      expect(sut.isInfected(1, -1)).toBe(false);
    });

    it('should not change the add infected count', () => {
      expect(sut.addInfectedCount).toBe(0);
    });
  });

  describe('when told to set a cell', () => {
    beforeEach(() => {
      sut.addInfected(0, 0);
    });

    it('should set the cell to infected', () => {
      expect(sut.infected.length).toBe(3);
      expect(sut.isInfected(0, 0)).toBe(true);
    });

    it('should increment the add infected count', () => {
      expect(sut.addInfectedCount).toBe(1);
    });
  });
});
