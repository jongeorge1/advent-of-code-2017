class Day24Part2 {
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

  findBridgesFrom(startPort, componentsToHere) {
    let availableComponentIds = this.portMap.get(startPort).filter(el => componentsToHere.indexOf(el) === -1);

    if (availableComponentIds.length === 0) {
      if (this.maximumLengthSoFar <= componentsToHere.length) {
        this.possibleBridges.push(componentsToHere);
        this.maximumLengthSoFar = componentsToHere.length;
      }
      return;
    }

    let bridgesFromHere = [];

    for (let componentId of availableComponentIds) {
      let component = this.componentMap.get(componentId);
      let thisBridge = componentsToHere.slice();
      thisBridge.push(component.id);

      let otherSide = component.ports.slice();
      otherSide.splice(otherSide.indexOf(startPort), 1);
      otherSide = otherSide[0];
      
      this.findBridgesFrom(otherSide, thisBridge);
    }
  }

  logBridge(ids) {
    console.log(ids.map(el => this.componentMap.get(el)).map(el => el.ports[0] + '/' + el.ports[1]).join('--'));
  }

  process(input) {
    this.maximumLengthSoFar = 0;
    this.possibleBridges = [];
    this.buildPortMap(input);
    
    this.findBridgesFrom(0, []);
    
    let bridgeLengths = this.possibleBridges.map(el => el.length);

    let longestBridgeLength = Math.max.apply(null, bridgeLengths);

    let longestBridges = this.possibleBridges.filter(el => el.length === longestBridgeLength);
    let strengths = longestBridges.map(el => el.reduce((acc, x) => acc += this.componentMap.get(x).strength, 0));
    return Math.max(...strengths);
  }
}

module.exports = Day24Part2;