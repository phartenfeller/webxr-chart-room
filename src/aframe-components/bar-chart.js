import chartColorPalette from '../util/chartColorPalette';
import getYAxisSpan from '../util/getYAxisSpan';
import scaleValues from '../util/scaleValues';

const PEDASTOL_HEIGHT = 0.1;
const BAR_GAP = 0.125;
const BAR_SIDE_LEN = 0.125;

export default function init(instance) {
  instance.registerComponent('barchart', {
    schema: {
      title: { type: 'string' },
      data: { type: 'string' },
    },

    /**
     * Initial creation and setting of the mesh.
     */
    init() {
      const { data, title } = this.data;
      const json = JSON.parse(data);
      console.log({ json, title });

      const xValues = json.map(({ x }) => x);
      const yValues = json.map(({ y }) => y);

      const yAxisSpan = getYAxisSpan(yValues);
      const scaledYValues = scaleValues(yValues, yAxisSpan[0], yAxisSpan[1]);

      console.log({ xValues, yValues, yAxisSpan, scaledYValues });

      this.chartWidth =
        scaledYValues.length * BAR_SIDE_LEN +
        (scaledYValues.length - 1) * BAR_GAP;

      console.log('this.chartWidth', this.chartWidth);

      // bars
      for (let i = 0; i < scaledYValues.length; i += 1) {
        const bar = document.createElement('a-entity');
        bar.setAttribute('geometry', {
          primitive: 'box',
          height: scaledYValues[i].toString(),
          width: BAR_SIDE_LEN,
          depth: BAR_SIDE_LEN,
        });
        bar.setAttribute('position', {
          // + BAR_SIDE_LEN / 2 because width goes negative and positive
          // and then the first one would go negative half of the BAR_SIDE_LEN
          x: i * (BAR_GAP + BAR_SIDE_LEN) + BAR_SIDE_LEN / 2,
          y: scaledYValues[i] / 2 + PEDASTOL_HEIGHT / 2,
          z: 0,
        });
        bar.setAttribute('material', { color: chartColorPalette(i) });
        this.el.appendChild(bar);
      }

      // pedastol
      const pedastol = document.createElement('a-entity');
      pedastol.setAttribute('geometry', {
        primitive: 'box',
        height: PEDASTOL_HEIGHT,
        width: this.chartWidth + 0.5,
        depth: 0.5,
      });
      pedastol.setAttribute('position', {
        x: this.chartWidth / 2,
        y: 0,
        z: 0,
      });
      pedastol.setAttribute('material', { color: '#9CA3AF' });
      this.el.appendChild(pedastol);

      // title
      const titleLen = title.length;
      const titleEl = document.createElement('a-entity');
      titleEl.setAttribute('position', {
        x: this.chartWidth / 2,
        y: 1,
        z: 0,
      });
      titleEl.setAttribute('text', {
        value: title,
        color: '#FFF',
        align: 'center',
        wrapCount: titleLen + 2,
      });
      titleEl.setAttribute('geometry', {
        primitive: 'plane',
        width: 'auto',
        height: 'auto',
      });
      titleEl.setAttribute('material', {
        color: '#000',
        shader: 'flat',
      });
      this.el.appendChild(titleEl);
    },
  });
}
