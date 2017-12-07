let Program = require('../../src/day07/program');

describe('day 7 program module', () => {
  let sut;
  
  describe('when created', () => {
    describe('and the input has children', () => {
      it('should parse correctly', () => {
        let result = new Program('fwft (72) -> ktlj, cntj, xhth');
        expect(result.name).toBe('fwft');
        expect(result.weight).toBe(72);
        expect(result.children).toEqual(['ktlj', 'cntj', 'xhth']);
      });
    });

    describe('when the item does not have children', () => {
      it('should parse correctly', () => {
        let result = new Program('fwft (72)');
        expect(result.name).toBe('fwft');
        expect(result.weight).toBe(72);
        expect(result.children).toEqual([]);
      });
    });
  });
});