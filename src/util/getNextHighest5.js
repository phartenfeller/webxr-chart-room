import checkNumber from './typeCheckers/checkNumber';

/**
 * Get next higher value that is dividable by 5
 * @param {number} value
 * @returns number
 */
function getNextHighest5(value) {
  checkNumber({ val: value, name: 'value' });

  if (value % 5 === 0) {
    return value + 5;
  }

  return Math.ceil(value / 5) * 5;
}

export default getNextHighest5;
