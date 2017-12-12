class Parser {
  constructor() {
    this.programs = [];
    this.groups = [];
  }

  addProgramToGroup(program, group) {
    if (program.group === undefined) {
      if (group === undefined) {
        group = {
          id: this.groups.length,
          programs: new Set()
        };

        this.groups.push(group);
      }

      program.group = group;
      group.programs.add(program);

      program.links.map(el => this.addProgramToGroup(el, group));
    }
  }

  buildGroups() {
    for (let program of this.programs) {
      if (program.group === undefined) {
        this.addProgramToGroup(program);
      }
    }
  }

  buildRelationships() {
    this.programs.map(el => {
      el.links = el.linkIds.map(l => this.programs[l]);
    });
  }

  addProgram(program, links) {
    this.programs[program] = {
      id: program,
      linkIds: links
    };
  }

  parseLine(line) {
    let parts = line.split(' ');
    let root = +parts[0];
    let connections = parts.slice(2).map(el => +el.replace(',', ''));
    this.addProgram(root, connections);
  }

  process(input) {
    input.split('\r\n').map(el => this.parseLine(el));
    this.buildRelationships();
    this.buildGroups();
  }
}

module.exports = Parser;