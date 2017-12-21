let Block = require('../../src/day21/block');
let Rule = require('../../src/day21/rule');

describe('day 21 block class', () => {
  let sut;

  describe('when created', () => {
    it('should set blockstring from the specified portion of the array', () => {
      sut = new Block(1, 1, 2, [['#', '#', '#'], ['#', '.', '#'], ['.', '.', '.']]);
      expect(sut.blockString).toBe('.#..');
    });
  });

  describe('when told to insert back into the target array', () => {
    it('should correctly populate the target section of the array', () => {
      sut = new Block(0, 0, 2, [['#', '#'], ['#', '#']]);
      let rule = new Rule('##/## => ###/#.#/###');
      let result = [];
      sut.writeResultInto([rule], result, 1, 1);
      expect(result[1]).toEqual([undefined, '#', '#', '#']);
    });
  });
});
