let Processor = require('../../src/day23/processor');

describe('day 23 duet', () => {
  let sut;

  beforeEach(() => {
    sut = new Processor();
  });

  describe('when created', () => {
    it('should set next instruction to 0', () => {
      expect(sut.nextInstruction).toBe(0);
    });

    it('should set the count of mul calls to 0', () => {
      expect(sut.muls).toBe(0);
    });
});

  describe('when asked for the index of a register', () => {
    it('should return the expected value', () => {
      expect(sut.registerIndex('b')).toBe(1);
    });

    it('should not increment the next instruction value', () => {
      expect(sut.registerIndex('b')).toBe(1);
      expect(sut.nextInstruction).toBe(0);
    });
  });

  describe('when asking for the value of a register', () => {
    describe('before it has been used', () => {
      it('should return 0', () => {
        expect(sut.register('c')).toBe(0);
      });

      it('should not increment the next instruction value', () => {
        expect(sut.register('c')).toBe(0);
        expect(sut.nextInstruction).toBe(0);
      });
    });
  });

  describe('when told to set a register to a value', () => {
    it('should set the register correctly', () => {
      sut.set('b', 5);
      expect(sut.registers[1]).toBe(5);
    });

    it('should increment the next instruction value', () => {
      sut.set('b', 5);
      expect(sut.nextInstruction).toBe(1);
    });
})

  describe('when told to subtract from a register', () => {
    describe('and the register has never been initialised', () => {
      it('should set the register to the specified value', () => {
        sut.sub('b', 10);
        expect(sut.registers[1]).toBe(-10);
      });

      it('should increment the next instruction value', () => {
        sut.sub('b', 10);
        expect(sut.nextInstruction).toBe(1);
      });
    });

    describe('and the register has previously been set', () => {
      it('should subtract the value from the existing value of the register', () => {
        sut.set('b', 5);
        sut.sub('b', 10);
        expect(sut.registers[1]).toBe(-5);
      });

      it('should increment the next instruction value', () => {
        sut.set('b', 5);
        sut.sub('b', 10);
        expect(sut.nextInstruction).toBe(2);
      });
    });
  });

  describe('when told multiply ', () => {
    describe('and the register has never been initialised', () => {
      it('should set the value of the register to 0', () => {
        sut.mul('d', 5);
        expect(sut.register('d')).toBe(0);
      });

      it('should increment the next instruction value', () => {
        sut.mul('d', 5);
        expect(sut.nextInstruction).toBe(1);
      });

      it('should increment the count of mul calls', () => {
        sut.mul('d', 5);
        expect(sut.muls).toBe(1);
      });
    });

    describe('and the register has previously been set', () => {
      it('should set the value of the register to the existing value multiplied by the given value', () => {
        sut.set('d', 5);
        sut.mul('d', 5);
        expect(sut.register('d')).toBe(25);
      });

      it('should increment the next instruction value', () => {
        sut.set('d', 5);
        sut.mul('d', 5);
        expect(sut.nextInstruction).toBe(2);
      });

      it('should increment the count of mul calls', () => {
        sut.set('d', 5);
        sut.mul('d', 5);
        expect(sut.muls).toBe(1);
      });
    });
  });

  describe('when told to jump', () => {
    describe('and the register has never been initialised', () => {
      it('should increment the next instruction value', () => {
        sut.jnz('d', 5);
        expect(sut.nextInstruction).toBe(1);
      });
    });

    describe('and the register has previously been set to 0', () => {
      it('should increment the next instruction value', () => {
        sut.set('d', 0);
        sut.jnz('d', 5);
        expect(sut.nextInstruction).toBe(2);
      });
    });

    describe('and the register has previously been set to a positive value', () => {
      it('should increment the next instruction value by the specified value', () => {
        sut.set('d', 3);
        sut.jnz('d', 5);
        expect(sut.nextInstruction).toBe(6);
      });
    });

    describe('and the register has previously been set to a negative value', () => {
      it('should increment the next instruction value by the specified value', () => {
        sut.set('d', -10);
        sut.jnz('d', 5);
        expect(sut.nextInstruction).toBe(6);
      });
    });
  });
});