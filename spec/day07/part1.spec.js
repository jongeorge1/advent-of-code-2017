let Day07Part1 = require('../../src/day07/part1');

describe('day 7.1', () => {
  let sut;
  let input = 'pbga (66)\r\nxhth (57)\r\nebii (61)\r\nhavc (66)\r\nktlj (57)\r\nfwft (72) -> ktlj, cntj, xhth\r\nqoyq (66)\r\npadx (45) -> pbga, havc, qoyq\r\ntknk (41) -> ugml, padx, fwft\r\njptl (61)\r\nugml (68) -> gyxo, ebii, jptl\r\ngyxo (61)\r\ncntj (57)';
  
  beforeEach(() => {
    sut = new Day07Part1();
  });

  describe('the parse line method', () => {
    describe('when the item has children', () => {
      it('should parse correctly', () => {
        let result = sut.parseLine('fwft (72) -> ktlj, cntj, xhth');
        expect(result.name).toBe('fwft');
        expect(result.weight).toBe(72);
        expect(result.children).toEqual(['ktlj', 'cntj', 'xhth']);
      });
    });

    describe('when the item does not have children', () => {
      it('should parse correctly', () => {
        let result = sut.parseLine('fwft (72)');
        expect(result.name).toBe('fwft');
        expect(result.weight).toBe(72);
        expect(result.children).toEqual([]);
      });
    });
  });
  
  describe('the parse input method', () => {
    it('should return the correct number of items', () => {
      expect(sut.parseInput(input).length).toBe(13);
    });
  });

  describe('the AoC test case', () => {
    it('should return 5', () => {
      expect(sut.process(input)).toBe('tknk');
    });
  });
});