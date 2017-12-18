class Duet {
  constructor(id) {
    this.registers = [];
    this.nextInstruction = 0;
    this.waiting = false;
    this.queue = [];
    this.sendCount = 0;

    this.set('p', id);
    this.nextInstruction = 0;
  }

  partnerWith(partner) {
    this.partner = partner;
    partner.partner = this;
  }

  enqueue(val) {
    this.queue.push(val);
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
    this.partner.enqueue(this.register(id));
    this.nextInstruction++;
    this.sendCount++;
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
    if (this.queue.length > 0) {
      // We can receive
      let val = this.queue.splice(0, 1)[0];
      this.set(id, val);
      this.waiting = false;
    } else {
      // Can't receive
      this.waiting = true;
    }
  }
}

module.exports = Duet;