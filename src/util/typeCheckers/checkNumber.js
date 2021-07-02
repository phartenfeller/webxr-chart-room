/**
 * Throws if a given input is not a number
 * @param  {Object} ...nums
 */
function checkNumber(...nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (typeof nums[i].val !== 'number') {
      throw new Error(`${nums[i].name} is not a number!`);
    }
  }
}

export default checkNumber;
