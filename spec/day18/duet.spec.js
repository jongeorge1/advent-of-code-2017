let Duet = require('../../src/day18/duet');

describe('day 18 duet', () => {
  let sut;

  beforeEach(() => {
    sut = new Duet();
  });

  describe('when created', () => {
    it('should set the recovered frequency to null', () => {
      expect(sut.recovered).toBe(null);
    });

    it('should set next instruction to 0', () => {
      expect(sut.nextInstruction).toBe(0);
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

  describe('when told to add to a register', () => {
    describe('and the register has never been initialised', () => {
      it('should set the register to the specified value', () => {
        sut.add('b', 10);
        expect(sut.registers[1]).toBe(10);
      });

      it('should increment the next instruction value', () => {
        sut.add('b', 10);
        expect(sut.nextInstruction).toBe(1);
      });
    });

    describe('and the register has previously been set', () => {
      it('should add the value to the existing value of the register', () => {
        sut.set('b', 5);
        sut.add('b', 10);
        expect(sut.registers[1]).toBe(15);
      });

      it('should increment the next instruction value', () => {
        sut.add('b', 10);
        expect(sut.nextInstruction).toBe(1);
      });
    });
  });

  describe('when told to play a sound', () => {
    describe('and the register has never been initialised', () => {
      it('should set the last sound property to 0', () => {
        sut.snd('c');
        expect(sut.lastSound).toBe(0);
      });

      it('should increment the next instruction value', () => {
        sut.snd('c');
        expect(sut.nextInstruction).toBe(1);
      });
    });

    describe('and the register has previously been set', () => {
      it('should set the last sound property to the value of the register', () => {
        sut.set('c', 10);
        sut.snd('c');
        expect(sut.lastSound).toBe(10);
      });

      it('should increment the next instruction value', () => {
        sut.set('c', 10);
        sut.snd('c');
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
    });
  });

  describe('when told to mod ', () => {
    describe('and the register has never been initialised', () => {
      it('should set the value of the register to 0', () => {
        sut.mod('d', 5);
        expect(sut.register('d')).toBe(0);
      });

      it('should increment the next instruction value', () => {
        sut.mod('d', 5);
        expect(sut.nextInstruction).toBe(1);
      });
    });

    describe('and the register has previously been set', () => {
      it('should set the value of the register to the remainder of dividing the register value by the given value', () => {
        sut.set('d', 5);
        sut.mod('d', 2);
        expect(sut.register('d')).toBe(1);
      });

      it('should increment the next instruction value', () => {
        sut.set('d', 5);
        sut.mod('d', 2);
        expect(sut.nextInstruction).toBe(2);
      });
    });
  });

  describe('when told to jump', () => {
    describe('and the register has never been initialised', () => {
      it('should increment the next instruction value', () => {
        sut.jgz('d', 5);
        expect(sut.nextInstruction).toBe(1);
      });
    });

    describe('and the register has previously been set to 0', () => {
      it('should increment the next instruction value', () => {
        sut.set('d', 0);
        sut.jgz('d', 5);
        expect(sut.nextInstruction).toBe(2);
      });
    });

    describe('and the register has previously been set to a positive value', () => {
      it('should increment the next instruction value by the specified value', () => {
        sut.set('d', 3);
        sut.jgz('d', 5);
        expect(sut.nextInstruction).toBe(6);
      });
    });

    describe('and the register has previously been set to a negative value', () => {
      it('should increment the next instruction value', () => {
        sut.set('d', 0);
        sut.jgz('d', 5);
        expect(sut.nextInstruction).toBe(2);
      });
    });
  });

  describe('when told to recover the last frequency played', () => {
    beforeEach(() => {
      sut.lastSound = 5;
    });

    describe('and the register has never been initialised', () => {
      it('should not change the recovered value', () => {
        sut.rcv('d');
        expect(sut.recovered).toBe(null);
      });
    });

    describe('and the register has previously been set to 0', () => {
      it('should not change the recovered value', () => {
        sut.set('d', 0);
        sut.rcv('d');
        expect(sut.recovered).toBe(null);
      });
    });

    describe('and the register has previously been set to a positive number', () => {
      it('should set the recovered value to the value of the last sound played', () => {
        sut.set('d', 4);
        sut.rcv('d');
        expect(sut.recovered).toBe(5);
      });
    });

    describe('and the register has previously been set to a negative number', () => {
      it('should set the recovered value to the value of the last sound played', () => {
        sut.set('d', -4);
        sut.rcv('d');
        expect(sut.recovered).toBe(5);
      });
    });
  });
});