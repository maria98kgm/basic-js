const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!arr.includes(-1)) return arr.sort((a, b) => a - b)
  let finale = arr.filter(x => x !== -1).sort((a, b) => a - b);
  for (let i in arr) {
    if (arr[i] == -1) continue;
    else arr[i] = finale.shift();
  }
  return arr;
}

module.exports = {
  sortByHeight
};
