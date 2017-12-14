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
      spyOn(sut, 'stringToBinary').and.returnValue('binary');
      spyOn(sut.hasher, 'hash').and.returnValue('hash');
    });

    it('should generate hashes using the hasher', () => {
      expect(sut.hasher.hash).toHaveBeenCalled();
    });
    
    it('should generate 128 hashes', () => {
      expect(sut.map.length).toBe(128);
    });

    it('should convert each hash to binary', () => {
      expect(sut.stringToBinary).toHaveBeenCalled();
    });
  });
});