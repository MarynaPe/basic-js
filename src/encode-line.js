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
  str = str.split('');
  let sum = 1; strNew = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]) {sum++;} 
    else {
      if (sum === 1) {sum = ''};
      strNew = strNew + sum + str[i];
          sum = 1;
    }
  }
  return  strNew;
}
console.log(encodeLine('aaaatttt'))


module.exports = {
  encodeLine
};
