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

  describe('when asked for total weight', () => {
    describe('and the program has children', () => {
      it('should return the sum of the childrens weights and its own weight', () => {
        let result = new Program('fwft (72)');
        result.children.push(new Program('ktlj (50)'))
        result.children.push(new Program('abdh (60)'))
        expect(result.totalWeight()).toBe(182);
      });
    });

    describe('and the program has no children', () => {
      it('should return its own weight', () => {
        let result = new Program('fwft (72)');
        expect(result.totalWeight()).toBe(72);
      });
    });
  })

  describe('when asked if it is balanced', () => {
    describe('and the program has no children', () => {
      it('should return true', () => {
        let result = new Program('fwft (72)');
        expect(result.isBalanced()).toBe(true);
      });
    });

    describe("and it is balanced", () => {
      it('should return true', () => {
        let result = new Program('fwft (72)');
        result.children.push(new Program('ktlj (50)'))
        result.children.push(new Program('abdh (50)'))
        expect(result.isBalanced()).toBe(true);
      });
    });

    describe('and it is not balanced', () => {
      it('should return false', () => {
        let result = new Program('fwft (72)');
        result.children.push(new Program('ktlj (50)'))
        result.children.push(new Program('abdh (60)'))
        expect(result.isBalanced()).toBe(false);
      });
    });
  });
});