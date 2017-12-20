class Snowflake {
  constructor(id, input) {
    let components = input.split(', ');
    this.id = id;
    this.position = this.extractVector(components[0]);
    this.velocity = this.extractVector(components[1]);
    this.acceleration = this.extractVector(components[2]);
    this.time = 0;
  }

  extractVector(s) {
    let components = s.substr(3, s.length - 4).split(',');
    let result = {
      x: +components[0],
      y: +components[1],
      z: +components[2],
    };

    return result;
  }

  move() {
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.velocity.z += this.acceleration.z;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.position.z += this.velocity.z;
    
    this.time++;
  }

  get accelerationMagnitude() {
    return Math.sqrt(Math.pow(this.acceleration.x, 2) + Math.pow(this.acceleration.y, 2) + Math.pow(this.acceleration.z, 2))
  }

  get distanceFromOrigin() {
    return Math.abs(this.position.x) + Math.abs(this.position.y) + Math.abs(this.position.z);
  }

  isInCollisionWith(flake) {
    return this.position.x === flake.position.x &&
    this.position.y === flake.position.y &&
    this.position.z === flake.position.z;
  }
}

module.exports = Snowflake;