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
  const object = {};

  for (let value of domains) {
    let arrNew = value.split('.').reverse();
    let arrNewLength = arrNew.length;

    for (let i = 0; i < arrNewLength; i++) {
      let arrNewResult = '.' + arrNew.slice(0, i + 1).join('.');
      if (object[arrNewResult]) {
         object[arrNewResult]=object[arrNewResult] + 1 }
         
      else {object[arrNewResult] = 1 }
    }

  }
  return object;
}

console.log(getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 })

module.exports = {
  getDNSStats
};
