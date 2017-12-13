let Layer = require('./layer');

class Day13Part2 {
  process(input) {
    let layers = [];

    input.split('\r\n').map(el => {
      let values = el.split(': ');
      let layer = new Layer(+values[0], +values[1]);
      layers[layer.id] = layer;
    });

    let caught;

    var delay = 0;
    do {

      caught = false;
      delay++;

      for (let i = 0; i < layers.length; i++) {
        if (layers[i] && layers[i].positionAfter(delay + i) === 0) {
          caught = true;
          continue;
        }
      }

    } while (caught)

    return delay;
  }
}

module.exports = Day13Part2;