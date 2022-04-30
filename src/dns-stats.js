const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  // for (let i in domains) {
  //   for (let j = domains[i].length - 1; j >= 0; j--) {
  //     if (domains[i][j] == '.' || j == 0) {
  //       if (obj[domains[i].substring(j+1, domains[i].length)] == undefined) {
  //         obj[domains[i].substring(j, domains[i].length)] = 0;
  //         for (let k in domains) {
  //           if (domains[k].includes(domains[i].substring(j, domains[i].length))) obj[domains[i].substring(j, domains[i].length)] += 1;
  //         }
  //       }
  //     }
  //   }
  // }
  for (let i in domains) {
    let st = domains[i].length;
    let tpAdd = '';
    for (let j = domains[i].length - 1; j >= 0; j--) {
      if (domains[i][j - 1] == '.' || j == 0) {
        tpAdd += '.' + domains[i].substring(j, st);
        st = j - 1;
        if (obj[tpAdd] == undefined) obj[tpAdd] = 1;
        else obj[tpAdd] += 1;
      }
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};
