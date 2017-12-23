let Carrier = require('../../src/day22/carrierv2');
let Map = require('../../src/day22/mapv2');

describe('day 22 carrier v2 class', () => {
  let sut;

  beforeEach(() => {
    map = new Map('..#\r\n#..\r\n...');
    sut = new Carrier(map);
  });

  describe('when created', () => {
    it('should be at position 0, 0', () => {
      expect(sut.x).toBe(0);
      expect(sut.y).toBe(0);
    });

    it('should be facing up', () => {
      expect(sut.direction).toBe(0);
    });
  });

  describe('when told to turn left', () => {
    describe('and current direction is up', () => {
      it('should end up facing left', () => {
        sut.direction = 0;
        sut.turnLeft();
        expect(sut.direction).toBe(3);
      });
    });

    describe('and current direction is left', () => {
      it('should end up facing down', () => {
        sut.direction = 3;
        sut.turnLeft();
        expect(sut.direction).toBe(2);
      });
    });

    describe('and current direction is down', () => {
      it('should end up facing right', () => {
        sut.direction = 2;
        sut.turnLeft();
        expect(sut.direction).toBe(1);
      });
    });

    describe('and current direction is right', () => {
      it('should end up facing up', () => {
        sut.direction = 1;
        sut.turnLeft();
        expect(sut.direction).toBe(0);
      });
    });
  })

  describe('when told to turn right', () => {
    describe('and current direction is up', () => {
      it('should end up facing right', () => {
        sut.direction = 0;
        sut.turnRight();
        expect(sut.direction).toBe(1);
      });
    });

    describe('and current direction is left', () => {
      it('should end up facing up', () => {
        sut.direction = 3;
        sut.turnRight();
        expect(sut.direction).toBe(0);
      });
    });

    describe('and current direction is down', () => {
      it('should end up facing left', () => {
        sut.direction = 2;
        sut.turnRight();
        expect(sut.direction).toBe(3);
      });
    });

    describe('and current direction is right', () => {
      it('should end up facing down', () => {
        sut.direction = 1;
        sut.turnRight();
        expect(sut.direction).toBe(2);
      });
    });
  })

  describe('when told to turn move forward', () => {
    describe('and current direction is up', () => {
      it('should move up one space', () => {
        sut.direction = 0;
        sut.forward();
        expect(sut.x).toBe(0);
        expect(sut.y).toBe(-1);
      });
    });

    describe('and current direction is left', () => {
      it('should move left one space', () => {
        sut.direction = 3;
        sut.forward();
        expect(sut.x).toBe(-1);
        expect(sut.y).toBe(0);
      });
    });

    describe('and current direction is down', () => {
      it('should move down one space', () => {
        sut.direction = 2;
        sut.forward();
        expect(sut.x).toBe(0);
        expect(sut.y).toBe(1);
      });
    });

    describe('and current direction is right', () => {
      it('should move right one space', () => {
        sut.direction = 1;
        sut.forward();
        expect(sut.x).toBe(1);
        expect(sut.y).toBe(0);
      });
    });
  })

  describe('when told to move', () => {
    let getStateSpy;

    beforeEach(() => {
      getStateSpy = spyOn(sut.map, 'getState');
      spyOn(sut.map, 'setState');
      spyOn(sut, 'turnLeft');
      spyOn(sut, 'turnRight');
      spyOn(sut, 'forward');
    });

    describe('and the current cell is infected', () => {
      beforeEach(() => {
        getStateSpy.and.returnValue(sut.map.states.infected);
        sut.move();
      });
      
      it('should turn right', () => {
        expect(sut.turnRight).toHaveBeenCalled();
      });

      it('should flag the cell', () => {
        expect(sut.map.setState).toHaveBeenCalledWith(0, 0, sut.map.states.flagged);
      });

      it('should move foward', () => {
        expect(sut.forward).toHaveBeenCalled();
      });
    });

    describe('and the current cell is clean', () => {
      beforeEach(() => {
        getStateSpy.and.returnValue(sut.map.states.clean);
        sut.move();
      });
      
      it('should turn left', () => {
        expect(sut.turnLeft).toHaveBeenCalled();
      });

      it('should weaken the cell', () => {
        expect(sut.map.setState).toHaveBeenCalledWith(0, 0, sut.map.states.weakened);
      });

      it('should move foward', () => {
        expect(sut.forward).toHaveBeenCalled();
      });
    });

    describe('and the current cell is weakened', () => {
      beforeEach(() => {
        getStateSpy.and.returnValue(sut.map.states.weakened);
        sut.move();
      });
      
      it('should not turn', () => {
        expect(sut.turnLeft).not.toHaveBeenCalled();
        expect(sut.turnRight).not.toHaveBeenCalled();
      });

      it('should infect the cell', () => {
        expect(sut.map.setState).toHaveBeenCalledWith(0, 0, sut.map.states.infected);
      });

      it('should move foward', () => {
        expect(sut.forward).toHaveBeenCalled();
      });
    });

    describe('and the current cell is flagged', () => {
      beforeEach(() => {
        getStateSpy.and.returnValue(sut.map.states.flagged);
        sut.move();
      });
      
      it('should reverse direction', () => {
        expect(sut.turnLeft.calls.count()).toBe(2);
      });

      it('should clean the cell', () => {
        expect(sut.map.setState).toHaveBeenCalledWith(0, 0, sut.map.states.clean);
      });

      it('should move foward', () => {
        expect(sut.forward).toHaveBeenCalled();
      });
    });
  });
});
