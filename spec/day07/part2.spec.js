let Day07Part2 = require('../../src/day07/part2');

describe('day 7.2', () => {
  let sut;
  let input = 'pbga (66)\r\nxhth (57)\r\nebii (61)\r\nhavc (66)\r\nktlj (57)\r\nfwft (72) -> ktlj, cntj, xhth\r\nqoyq (66)\r\npadx (45) -> pbga, havc, qoyq\r\ntknk (41) -> ugml, padx, fwft\r\njptl (61)\r\nugml (68) -> gyxo, ebii, jptl\r\ngyxo (61)\r\ncntj (57)';
  
  beforeEach(() => {
    sut = new Day07Part2();
  });

  describe('the AoC test case', () => {
    it('should return 60', () => {
      expect(sut.process(input)).toBe(60);
    });
  });
});