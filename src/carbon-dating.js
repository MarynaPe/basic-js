const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const k = 0.693 / HALF_LIFE_PERIOD;
  // if (typeof (sampleActivity) == "string" && sampleActivity <= 15 && sampleActivity > 0 && sampleActivity !== null && sampleActivity !== undefined && sampleActivity !== [] && sampleActivity !== {}) {
  //   let result = Math.ceil((Math.log(MODERN_ACTIVITY / +sampleActivity)) / (k));
  //   return result;
  // }

  if (/^-?[\d.]+(?:e-?\n\t\r\d+)?$/.test(sampleActivity) && typeof(sampleActivity)==="string" && sampleActivity <= 15 && sampleActivity > 0) {
    let result = Math.ceil((Math.log(MODERN_ACTIVITY /sampleActivity)) / (k));
    if (result > 0 && result != 0) { return result }
    else { return false }
  }

  else { return false }
}

console.log(dateSample('1'));
console.log(dateSample('WOOT!'));

module.exports = {
  dateSample
};
