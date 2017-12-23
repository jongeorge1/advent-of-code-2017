let Carrier = require('../../src/day22/carrier');
let Map = require('../../src/day22/map');

describe('day 22 map class', () => {
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
    describe('and the current cell is infected', () => {
      beforeEach(() => {
        spyOn(sut.map, 'isInfected').and.returnValue(true);
        spyOn(sut.map, 'clearInfected');
        spyOn(sut, 'turnRight');
        spyOn(sut, 'forward');
        sut.move();
      });
      
      it('should turn right', () => {
        expect(sut.turnRight).toHaveBeenCalled();
      });

      it('should clear the infection', () => {
        expect(sut.map.clearInfected).toHaveBeenCalled();
      });

      it('should move foward', () => {
        expect(sut.forward).toHaveBeenCalled();
      });
    });

    describe('and the current cell is not infected', () => {
      beforeEach(() => {
        spyOn(sut.map, 'isInfected').and.returnValue(false);
        spyOn(sut.map, 'addInfected');
        spyOn(sut, 'turnLeft');
        spyOn(sut, 'forward');
        sut.move();
      });
      
      it('should turn left', () => {
        expect(sut.turnLeft).toHaveBeenCalled();
      });

      it('should set the infection', () => {
        expect(sut.map.addInfected).toHaveBeenCalled();
      });

      it('should move foward', () => {
        expect(sut.forward).toHaveBeenCalled();
      });
    });
  });
});
