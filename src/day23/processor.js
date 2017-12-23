class Processor {
  constructor() {
    this.muls = 0;
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
  
  sub(id, val) {
    this.set(id, this.register(id) - this.numberOrRegister(val));
  }

  mul(id, val) {
    this.set(id, this.register(id) * this.numberOrRegister(val));
    this.muls++;
  }

  jnz(id, val) {
    if (this.numberOrRegister(id) !== 0) {
      this.nextInstruction += this.numberOrRegister(val);
    } else {
      this.nextInstruction++;
    }
  } 
}

module.exports = Processor;