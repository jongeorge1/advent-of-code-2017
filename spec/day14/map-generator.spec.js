let MapGenerator = require('../../src/day14/map-generator');

describe('the map generator module', () => {
  describe('the hex to binary function', () => {
    it('should convert a0c2017 to the expected value', () => {
      let sut = new MapGenerator();
      let result = sut.stringToBinary('a0c2017');
      expect(result).toBe('1010000011000010000000010111');
    })
  });

  describe('for a given input', () => {
    let sut;

    beforeEach(() => {
      sut = new MapGenerator('input');
    });

    it('should generate 128 hashes', () => {
      expect(sut.map.length).toBe(128);
    });
  });
});