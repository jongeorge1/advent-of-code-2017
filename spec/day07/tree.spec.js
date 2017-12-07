let Tree = require('../../src/day07/tree');

describe('day 7.1', () => {
  let input = 'pbga (66)\r\nxhth (57)\r\nebii (61)\r\nhavc (66)\r\nktlj (57)\r\nfwft (72) -> ktlj, cntj, xhth\r\nqoyq (66)\r\npadx (45) -> pbga, havc, qoyq\r\ntknk (41) -> ugml, padx, fwft\r\njptl (61)\r\nugml (68) -> gyxo, ebii, jptl\r\ngyxo (61)\r\ncntj (57)';
  
  describe('when created', () => {
    it('should return the correct number of items', () => {
      let tree = new Tree(input);
      expect(tree.programs.length).toBe(13);
    });

    it('should have the expected root node', () => {
      let tree = new Tree(input);
      expect(tree.root.name).toBe('tknk');
    });
  });
});