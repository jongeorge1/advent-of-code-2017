let Layer = require('../../src/day13/layer');

describe('day 13 layer', () => {
  let input = '';
  let sut;

  describe('when initialised', () => {
    beforeEach(() => {
      sut = new Layer(1, 4);
    });

    it('should set its id to the specified value', () => {
      expect(sut.id).toBe(1);
    });

    it('should set its size to the specified value', () => {
      expect(sut.size).toBe(4);
    });

    it('should set its scanner position to 0', () => {
      expect(sut.position).toBe(0);
    });

    it('should be moving in a down direction', () => {
      expect(sut.direction).toBe(1);
    })
  });

  describe('when asked for hit severity', () => {
    it('should return depth multiplied by size', () => {
      sut = new Layer(2, 5);
      expect(sut.hitSeverity).toBe(10);
    });
  });

  describe('when told to move', () => {
    describe('and the direction is down', () => {
      describe('and the scanner is at the top', () => {
        beforeEach(() => {
          sut = new Layer(1, 4);
          sut.move();
        });

        it('should move down one step', () => {
          expect(sut.position).toBe(1);
        });

        it('should still be moving down', () => {
          expect(sut.direction).toBe(1);
        });
      });

      describe('and the scanner is in the last but one position', () => {
        beforeEach(() => {
          sut = new Layer(1, 4);
          sut.move();
          sut.move();
          sut.move();
        });
        
        it('should move to the last position', () => {
          expect(sut.position).toBe(3);
        })

        it('should be moving up', () => {
          expect(sut.direction).toBe(-1);
        });
      });
    });

    describe('and the direction is up', () => {
      describe('and the scanner is at the bottom', () => {
        beforeEach(() => {
          sut = new Layer(1, 4);
          sut.position = 3;
          sut.direction = -1;
          sut.move();
        });
        
        it('should move up one step', () => {
          expect(sut.position).toBe(2);
        });

        it('should still be moving up', () => {
          expect(sut.direction).toBe(-1);
        });
      });

      describe('and the scanner is in the second position', () => {
        beforeEach(() => {
          sut = new Layer(1, 4);
          sut.position = 1;
          sut.direction = -1;
          sut.move();
        });
        
        it('should move to the first position', () => {
          expect(sut.position).toBe(0);
        })

        it('should be moving down', () => {
          expect(sut.direction).toBe(1);
        });
      });
    });
  });
});