let Layer = require('./layer');

class Day13Part1 {
  process(input) {
    let layers = [];

    input.split('\r\n').map(el => {
      let values = el.split(': ');
      let layer = new Layer(+values[0], +values[1]);
      layers[layer.id] = layer;
    });

    var severity = 0;

    for (let i = 0; i < layers.length; i++) {
      if (layers[i] && layers[i].position === 0) {
        severity += layers[i].hitSeverity;
      }

      layers.map(el => { if (el) el.move(); });
    }

    return severity;
  }
}

module.exports = Day13Part1;