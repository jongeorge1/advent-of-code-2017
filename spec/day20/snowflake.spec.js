let Snowflake = require('../../src/day20/snowflake');

describe('day 20 snowflake class', () => {
  let sut;

  beforeEach(() => {
    sut = new Snowflake(0, 'p=<-11104,1791,5208>, v=<-6,36,-84>, a=<19,-5,-4>');
  });

  describe('when created', () => {
    it('should set the id correctly', () => {
      expect(sut.id).toBe(0);
    });

    it('should set the initial position correctly', () => {
      expect(sut.position.x).toBe(-11104);
      expect(sut.position.y).toBe(1791);
      expect(sut.position.z).toBe(5208);
    });

    it('should set the initial velocity correctly', () => {
      expect(sut.velocity.x).toBe(-6);
      expect(sut.velocity.y).toBe(36);
      expect(sut.velocity.z).toBe(-84);
    });

    it('should set the acceleration correctly', () => {
      expect(sut.acceleration.x).toBe(19);
      expect(sut.acceleration.y).toBe(-5);
      expect(sut.acceleration.z).toBe(-4);
    });
  });

  describe('when asked for its distance from origin', () => {
    it('should return the manhattan distance of the position', () => {
      expect(sut.distanceFromOrigin).toBe(18103);
    });
  });

  describe('when asked for the magnitude of the acceleration vector', () => {
    it('should return the expected value', () => {
      expect(sut.accelerationMagnitude).toBe(20.049937655763422);
    });
  });

  describe('when told to move', () => {
    beforeEach(() => {
      sut.move();
    });

    it('should update its position as expected', () => {
      expect(sut.position.x).toBe(-11091);
      expect(sut.position.y).toBe(1822);
      expect(sut.position.z).toBe(5120);
    });

    it('should update its velocity as expected', () => {
      expect(sut.velocity.x).toBe(13);
      expect(sut.velocity.y).toBe(31);
      expect(sut.velocity.z).toBe(-88);
    });
  });

  describe('when asked if the flake is at a given position at a time', () => {
    describe('and it is', () => {
      it('should return true', () => {
        let otherFlake = new Snowflake(1, 'p=<-11104,1791,5208>, v=<-6,36,-84>, a=<19,-5,-4>');
        expect(sut.isInCollisionWith(otherFlake)).toBe(true);
      });
    });

    describe('and it is not', () => {
      it('should return false', () => {
        let otherFlake = new Snowflake(1, 'p=<-11104,1791,5208>, v=<-6,36,-84>, a=<19,-5,-4>');
        otherFlake.move();
        expect(sut.isInCollisionWith(otherFlake)).toBe(false);
      });
    });
  });
});
