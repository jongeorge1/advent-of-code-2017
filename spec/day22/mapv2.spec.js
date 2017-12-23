let Map2 = require('../../src/day22/mapv2');

describe('day 22 map class', () => {
  let sut;

  beforeEach(() => {
    sut = new Map2('..#\r\n#..\r\n...');
  });

  describe('when created', () => {
    it('should contain the expected number of infected blocks', () => {
      sut = new Map2('..#\r\n#..\r\n...');
      expect(sut.infected.size).toBe(2);
    });

    it('should contain infected blocks at the expected positions', () => {
      expect(sut.getState(1, -1)).toBe(sut.states.infected);
      expect(sut.getState(-1, 0)).toBe(sut.states.infected);
    });

    it('should have add infected count of 0', () => {
      expect(sut.addInfectedCount).toBe(0);
    });
  });

  describe('when told to set a cell', () => {
    describe('and the new state is clear', () => {
      beforeEach(() => {
        sut.setState(1, -1, sut.states.clean);
      });

      it('should remove the entry from the infected cells', () => {
        expect(sut.infected.size).toBe(1);
      });
    });
    
    describe('and the new state is infected', () => {
      beforeEach(() => {
        sut.setState(0, 0, sut.states.infected);
      });

      it('should add the entry to the infected cells', () => {
        expect(sut.infected.size).toBe(3);
      });

      it('should increment the add infected count', () => {
        expect(sut.addInfectedCount).toBe(1);
      });
    });

    describe('and the new state is neither clear or infected', () => {
      beforeEach(() => {
        sut.setState(0, 0, sut.states.flagged);
      });

      it('should add the entry to the infected cells', () => {
        expect(sut.infected.size).toBe(3);
      });

      it('should not increment the add infected count', () => {
        expect(sut.addInfectedCount).toBe(0);
      });
    });
  });
});
