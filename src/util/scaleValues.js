import checkNumber from './typeCheckers/checkNumber';

/**
 * Scale values in passed array between 0 and 1 with min and max val
 * @param {Array} arr
 * @param {Number} min
 * @param {Number} max
 */
function scaleValues(arr, min, max) {
  checkNumber({ val: min, name: 'min' }, { val: max, name: 'max' });

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i] / (max - min);
  }
  return arr;
}

export default scaleValues;
