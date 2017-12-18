let Duet = require('../../src/day18/duet.v2');

describe('day 18 duet', () => {
  let sut;
  let partner;

  beforeEach(() => {
    sut = new Duet(1);
    partner = new Duet(2);
    sut.partnerWith(partner);
    partner.partnerWith(sut);
  });

  describe('when created', () => {
    it('should set next instruction to 0', () => {
      expect(sut.nextInstruction).toBe(0);
    });

    it('should set the value of register p to its program id', () => {
      expect(sut.register('p')).toBe(1);
      expect(partner.register('p')).toBe(2);
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

  describe('when told to send', () => {
    describe('and the register has never been initialised', () => {
      it('should send 0 to the partner', () => {
        spyOn(partner, 'enqueue');
        sut.snd('c');
        expect(partner.enqueue).toHaveBeenCalledWith(0);
      });

      it('should increment the next instruction value', () => {
        sut.snd('c');
        expect(sut.nextInstruction).toBe(1);
      });
    });

    describe('and the register has previously been set', () => {
      it('should set the last sound property to the value of the register', () => {
        spyOn(partner, 'enqueue');
        sut.set('c', 10);
        sut.snd('c');
        expect(partner.enqueue).toHaveBeenCalledWith(10);
      });

      it('should increment the next instruction value', () => {
        sut.set('c', 10);
        sut.snd('c');
        expect(sut.nextInstruction).toBe(2);
      });
    });
  });

  describe('when told to receive', () => {
    describe('and there is no value to receive', () => {
      beforeEach(() => {
        sut.rcv('d');
      });
      
      it('should set waiting to true', () => {
        expect(sut.waiting).toBe(true);
      });

      it('should not increment the next instruction value', () => {
        expect(sut.nextInstruction).toBe(0);
      });
    });

    describe('and there is a value on the queue', () => {
      beforeEach(() => {
        sut.queue = [6];
        sut.rcv('d');
      });
      
      it('should set waiting to false', () => {
        expect(sut.waiting).toBe(false);
      });

      it('should put the received value in the register', () => {
        expect(sut.register('d')).toBe(6);
      });

      it('should remove the item from the queue', () => {
        expect(sut.queue.length).toBe(0);
      });

      it('should increment the next instruction value', () => {
        expect(sut.nextInstruction).toBe(1);
      });
    });

    describe('and there are multiple values on the queue', () => {
      beforeEach(() => {
        sut.queue = [6, 9];
        sut.rcv('d');
      });
      
      it('should set waiting to false', () => {
        expect(sut.waiting).toBe(false);
      });

      it('should put the received value in the register', () => {
        expect(sut.register('d')).toBe(6);
      });

      it('should remove the item from the queue', () => {
        expect(sut.queue).toEqual([9]);
      });

      it('should increment the next instruction value', () => {
        expect(sut.nextInstruction).toBe(1);
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
});