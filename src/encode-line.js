const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let final = '';
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i-1] != str[i] && str[i+1] != str[i]) final += str[i];
    else if (str[i+1] == str[i]) num++;
    else {
      num++;
      final += `${num}${str[i]}`;
      num = 0;
    }
  }
  return final;
}

module.exports = {
  encodeLine
};
