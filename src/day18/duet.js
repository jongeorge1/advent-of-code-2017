class Duet {
  constructor() {
    this.recovered = null;
    this.lastSound = null;
    this.registers = [];
    this.nextInstruction = 0;
  }

  registerIndex(id) {
    return id.charCodeAt(0) - 97;
  }

  numberOrRegister(input) {
    let val = parseInt(input);
    if (isNaN(val)) {
      return this.register(input);
    }

    return val;
  }

  register(id) {
    return this.registers[this.registerIndex(id)] || 0;
  }

  set(id, val) {
    this.registers[this.registerIndex(id)] = this.numberOrRegister(val);
    this.nextInstruction++;
  }
  
  add(id, val) {
    this.set(id, this.register(id) + this.numberOrRegister(val));
  }

  snd(id) {
    this.lastSound = this.register(id);
    this.nextInstruction++;
  }

  mul(id, val) {
    this.set(id, this.register(id) * this.numberOrRegister(val));
  }

  mod(id, val) {
    this.set(id, this.register(id) % this.numberOrRegister(val));
  }

  jgz(id, val) {
    if (this.numberOrRegister(id) > 0) {
      this.nextInstruction += this.numberOrRegister(val);
    } else {
      this.nextInstruction++;
    }
  } 

  rcv(id) {
    let val = this.register(id);
    if (val !== 0) {
      this.recovered = this.lastSound;
    }

    this.nextInstruction++;
  }
}

module.exports = Duet;