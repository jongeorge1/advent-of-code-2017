let Turing = require('../../src/day25/turing');
let State = require('../../src/day25/state');
let Action = require('../../src/day25/action');

describe('day 25 turing module', () => {
  let sut;
  let stateA;
  let stateB;
  let actionA0;
  let actionA1;
  let actionB0;
  let actionB1;

  beforeEach(() => {
    actionA0 = new Action(1, 1, 'b');
    actionA1 = new Action(0, -1, 'b');
    actionB0 = new Action(1, -1, 'a');
    actionB1 = new Action(1, 1, 'a');
    stateA = new State('a', [actionA0, actionA1]);
    stateB = new State('b', [actionB0, actionB1]);

    let states = [stateA, stateB];
    sut = new Turing(states, 'a');
  });

  describe('when created', () => {
    it('should set its start state to the specified state', () => {
      expect(sut.state.name).toBe('a');
    });

    it('should set its cursor position to 0', () => {
      expect(sut.cursor).toBe(0);
    });

    it('should set its checksum to 0', () => {
      expect(sut.checksum).toBe(0);
    });
  });

  describe('when asked for the current tape value', () => {
    describe('and it is 0', () => {
      it('should return 0', () => {
        expect(sut.currentTapeValue).toBe(0);
      });
    });

    describe('and it is 1', () => {
      it('should return 1', () => {
        sut.currentTapeValue = 1;
        expect(sut.currentTapeValue).toBe(1);
      });
    });
  });

  describe('when asked for the current action', () => {
    describe('and the tape value at the cursor is 0', () => {
      it('should return the expected action', () => {
        expect(sut.currentAction).toBe(actionA0);
      });
    });

    describe('and the tape value at the cursor is 1', () => {
      it('should return the expected action', () => {
        sut.currentTapeValue = 1;
        expect(sut.currentAction).toBe(actionA1);
      });
    });
  });

  describe('the AoC test case', () => {
    describe('when told to carry out 6 steps', () => {
      it('should return a diagnostic checksum of 3', () => {
        sut.step();
        sut.step();
        sut.step();
        sut.step();
        sut.step();
        sut.step();
        expect(sut.checksum).toBe(3);
      });
    })
  });

});