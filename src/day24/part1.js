class Day24Part1 {
  buildPortMap(input) {
    let i = 0;
    let components = input.split('\r\n').map(el => el.split('/')).map(el => { return { id: i++, ports: [+el[0], +el[1]], strength: +el[0] + +el[1] }; });
    let componentMap = new Map();

    let portMap = new Map();

    for (let component of components) {
      componentMap.set(component.id, component);

      if (!portMap.has(component.ports[0])) {
        portMap.set(component.ports[0], []);
      }

      if (!portMap.has(component.ports[1])) {
        portMap.set(component.ports[1], []);
      }

      portMap.get(component.ports[0]).push(component.id);
      portMap.get(component.ports[1]).push(component.id);
    }

    this.portMap = portMap;
    this.componentMap = componentMap;
    this.components = components;
  }

  getHighestBridgeStrengthFrom(startPort, usedComponentIds) {
    // console.log('looking for bridges from ' + startPort);
    let availableComponentIds = this.portMap.get(startPort).filter(el => usedComponentIds.indexOf(el) === -1);

    if (availableComponentIds.length === 0) {
      // console.log(`Found nothing from ${startPort}`);
      return 0;
    }

    let strengths = [];

    for (let componentId of availableComponentIds) {
      let component = this.componentMap.get(componentId);
      // console.log(`Found matching component from ${startPort}: ${component.id}, [${component.ports[0]}, ${component.ports[1]}]`);
      let used = usedComponentIds.slice();
      used.push(component.id);

      // What's the other side of the port...
      let otherSide = component.ports.slice();
      otherSide.splice(otherSide.indexOf(startPort), 1);
      otherSide = otherSide[0];
      
      let strengthFromHere = component.strength + this.getHighestBridgeStrengthFrom(otherSide, used);
      strengths.push(strengthFromHere);
      // console.log(`Found a bridge from ${startPort} with a strength of ${strengthFromHere}`);
    }

    return Math.max(...strengths);
  }

  process(input) {
    this.buildPortMap(input);
    
    return this.getHighestBridgeStrengthFrom(0, []);
  }
}

module.exports = Day24Part1;