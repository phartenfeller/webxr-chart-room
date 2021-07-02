import getNextHighest5 from './getNextHighest5';

/**
 * Returns an array with man and max value for the span
 * @param {Array} arr array of the y (number) values
 * @param {Boolean} zeroBound default true
 * @returns array with min and max
 */
function getYAxisSpan(arr, zeroBound = true) {
  const max = Math.max(...arr);

  if (zeroBound) {
    return [0, getNextHighest5(max)];
  }
  const min = Math.min(...arr);

  return [min, getNextHighest5(max)];
}

export default getYAxisSpan;
