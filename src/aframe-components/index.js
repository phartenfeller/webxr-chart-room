import barChart from './bar-chart';
import chartStand from './chart-stand';

export default function initAll(instance) {
  chartStand(instance);
  barChart(instance);
}
