const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let jew = n.toString();
  while (jew.length !== 1) {
    let k = 0;
    for (let i in jew) k += parseInt(jew[i]);
    jew = k.toString();
  }
  return parseInt(jew);
}

module.exports = {
  getSumOfDigits
};
