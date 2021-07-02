import chartColorPalette from '../util/chartColorPalette';
import getYAxisSpan from '../util/getYAxisSpan';
import scaleValues from '../util/scaleValues';

export default function init(instance) {
  instance.registerComponent('barchart', {
    schema: {
      data: { type: 'string' },
    },

    /**
     * Initial creation and setting of the mesh.
     */
    init() {
      const el = this.el;

      const { data } = this.data;
      const json = JSON.parse(data);
      console.log(json);

      const xValues = json.map(({ x }) => x);
      const yValues = json.map(({ y }) => y);

      const yAxisSpan = getYAxisSpan(yValues);
      const scaledYValues = scaleValues(yValues, yAxisSpan[0], yAxisSpan[1]);

      console.log({ xValues, yValues, yAxisSpan, scaledYValues });

      for (let i = 0; i < scaledYValues.length; i += 1) {
        const bar = document.createElement('a-entity');
        bar.setAttribute('geometry', {
          primitive: 'box',
          height: scaledYValues[i].toString(),
          width: '0.125',
          depth: '0.125',
        });
        bar.setAttribute('position', { x: i * 0.25, y: 0, z: 0 });
        bar.setAttribute('material', { color: chartColorPalette(i) });
        this.el.appendChild(bar);
      }
    },
  });
}
