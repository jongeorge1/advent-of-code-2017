let Rule = require('../../src/day21/rule');
let Block = require('../../src/day21/block');

describe('day 21 rule class', () => {
  let sut;

  describe('when calling get all rotations', () => {
    it('should return the expected rotations', () => {
      sut = new Rule();
      let result = sut.getAllRotations('.#./..#/###');
      expect(result.length).toBe(8);
      expect(result.indexOf('.#...####')).not.toBe(-1);
      expect(result.indexOf('.#.#..###')).not.toBe(-1);
      expect(result.indexOf('#..#.###.')).not.toBe(-1);
      expect(result.indexOf('###..#.#.')).not.toBe(-1);
    });
  });

  describe('when created', () => {
    describe('with a two by two rule', () => {
      describe('and all rotations are identical', () => {
        it('should have a single match string', () => {
          sut = new Rule('##/## => .../...');
          expect(sut.matches.length).toBe(1);
          expect(sut.matches.indexOf('####')).not.toBe(-1);
        });
      });

      describe('and some rotations are identical', () => {
        it('should have a single match string', () => {
          sut = new Rule('#./.# => .../...');
          expect(sut.matches.length).toBe(2);
          expect(sut.matches.indexOf('#..#')).not.toBe(-1);
          expect(sut.matches.indexOf('.##.')).not.toBe(-1);
        });
      });

      describe('and all rotations are different', () => {
        it('should have four match strings', () => {
          sut = new Rule('#./.. => .../...');
          expect(sut.matches.length).toBe(4);
          expect(sut.matches.indexOf('#...')).not.toBe(-1);
          expect(sut.matches.indexOf('.#..')).not.toBe(-1);
          expect(sut.matches.indexOf('..#.')).not.toBe(-1);
          expect(sut.matches.indexOf('...#')).not.toBe(-1);
        });
      });
    });

    describe('with a three by three rule', () => {
      it('should set the result to a four by four array', () => {
        sut = new Rule('###/#.#/### => .##./.##./.##./.##.');
        expect(sut.result.length).toBe(16);
        expect(sut.result).toBe('.##..##..##..##.');
      });

      describe('and all rotations are identical', () => {
        it('should have a single match string', () => {
          sut = new Rule('###/#.#/### => ..../....');
          expect(sut.matches.length).toBe(1);
          console.log(sut.matches);
          expect(sut.matches.indexOf('####.####')).not.toBe(-1);
        });
      });

      describe('and no rotations are identical', () => {
        it('should have eight match strings', () => {
          sut = new Rule('#../.#./... => ..../....');
          expect(sut.matches.length).toBe(4);
          expect(sut.matches.indexOf('#...#....')).not.toBe(-1);
          expect(sut.matches.indexOf('..#.#....')).not.toBe(-1);
          expect(sut.matches.indexOf('....#.#..')).not.toBe(-1);
          expect(sut.matches.indexOf('....#...#')).not.toBe(-1);
        });
      });

      describe('and some rotations are identical', () => {
        it('should have the expected number of match strings', () => {
          sut = new Rule('##./#.#/.## => ..../....');
          expect(sut.matches.length).toBe(2);
          expect(sut.matches.indexOf('##.#.#.##')).not.toBe(-1);
          expect(sut.matches.indexOf('.###.###.')).not.toBe(-1);
        });
      });
    });
  });

  describe('when asked if it matches a block', () => {
    describe('with a two by two rule', () => {
      describe('and the rule matches', () => {
        it('should return true', () => {
          sut = new Rule('#./.# => .../...');
          let block = new Block(0, 0, 2, [['#', '.'], ['.', '#']]);
          expect(sut.matchesBlock(block)).toBe(true);
        });
      });

      describe('and the rule matches a rotated version of the block', () => {
        it('should return true', () => {
          sut = new Rule('#./.# => .../...');
          let block = new Block(0, 0, 2, [['.', '#'], ['#', '.']]);
          expect(sut.matchesBlock(block)).toBe(true);
        });
      });

      describe('and the rule does not match', () => {
        it('should return false', () => {
          sut = new Rule('#./.# => .../...');
          let block = new Block(0, 0, 2, [['#', '#'], ['#', '.']]);
          expect(sut.matchesBlock(block)).toBe(false);
        });
      });
    });

    describe('with a three by three rule', () => {
      describe('and the rule matches', () => {
        it('should return true', () => {
          sut = new Rule('#../..#/..# => ..../....');
          let block = new Block(0, 0, 3, [['#', '.', '.'], ['.', '.', '#'], ['.', '.', '#']]);
          console.log(block.blockString);
          expect(sut.matchesBlock(block)).toBe(true);
        });
      });

      describe('and the rule matches a rotated version of the block', () => {
        it('should return true', () => {
          sut = new Rule('#../..#/..# => ..../....');
          let block = new Block(0, 0, 3, [['.', '.', '#'], ['.', '.', '.'], ['#', '#', '.']]);
          expect(sut.matchesBlock(block)).toBe(true);
        });
      });

      describe('and the rule matches a flipped version of the block', () => {
        it('should return true', () => {
          sut = new Rule('#../..#/..# => ..../....');
          let block = new Block(0, 0, 3, [['.', '.', '#'], ['#', '.', '.'], ['#', '.', '.']]);
          expect(sut.matchesBlock(block)).toBe(true);
        });
      });

      describe('and the rule does not match', () => {
        it('should return false', () => {
          sut = new Rule('#../..#/..# => ..../....');
          let block = new Block(0, 0, 3, [['#', '#', '#'], ['#', '.', '.'], ['#', '.', '.']]);
          expect(sut.matchesBlock(block)).toBe(false);
        });
      });
    });
  });
});