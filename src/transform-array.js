const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let finArr = [];
  let deleted = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
      if (arr[i+1] == undefined) continue;
      else finArr.push(arr[i+1])
    }
    else if (arr[i] == '--double-prev') {
      if (arr[i-1] == undefined || deleted) {
        deleted = true;
        continue;
      }
      else finArr.push(arr[i-1])
    }
    else if (arr[i] == '--discard-next') {
      if (arr[i+1] == undefined) continue;
      else {
        deleted = true;
        i++;
      }
    }
    else if (arr[i] == '--discard-prev') {
      if (finArr[i-1] == undefined) continue;
      finArr.pop();
    }
    else finArr.push(arr[i])
  }
  return finArr;
}

module.exports = {
  transform
};
