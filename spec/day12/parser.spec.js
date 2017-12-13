let Parser = require('../../src/day12/parser');

describe('day 12 parser', () => {
  let input = '';

  beforeEach(() => {
    sut = new Parser();
  });

  describe('parsing a program line', () => {
    it('should call the add program method', () => {
      spyOn(sut, 'addProgram');
      sut.parseLine('2 <-> 0, 3, 4');
      expect(sut.addProgram).toHaveBeenCalledWith(2, [0, 3, 4]);
    });
  });

  describe('building relationships', () => {
    describe('when told to build relationships', () => {
      it('should update every program with a list of links to other programs', () => {
        sut.addProgram(0, [1, 2]);
        sut.addProgram(1, [0, 3]);
        sut.addProgram(2, [0, 3]);
        sut.addProgram(3, [1, 2]);

        sut.buildRelationships();
        expect(sut.programs[0].links.length).toBe(2);
        expect(sut.programs[0].links[0].links.length).toBe(2);
      });
    });
  });

  describe('when told to build groups', () => {
    it('should build the expected groups', () => {
      sut.addProgram(0, [2]);
      sut.addProgram(1, [1]);
      sut.addProgram(2, [0, 3, 4]);
      sut.addProgram(3, [2, 4]);
      sut.addProgram(4, [2, 3, 6]);
      sut.addProgram(5, [6]);
      sut.addProgram(6, [4, 5]);

      sut.buildRelationships();
      sut.buildGroups();

      expect(sut.groups.length).toBe(2);
      expect(sut.groups[0].programs.size).toBe(6);
      expect(sut.groups[1].programs.size).toBe(1);
    });
  });

  describe('adding programs', () => {
    describe('when adding a program', () => {
      it('should add the new program to the list', () => {
        sut.addProgram(0, [1, 3, 4]);
        expect(sut.programs[0].id).toBe(0);
        expect(sut.programs[0].linkIds).toEqual([1, 3, 4]);
      });
    });
  });
});