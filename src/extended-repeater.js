const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  separator = options.separator;
  addition = options.addition;
  additionRepeatTimes = options.additionRepeatTimes;
  additionSeparator = options.additionSeparator;

if (typeof str !== 'string') {str = String(str);}
if (addition === undefined) { addition = '';} else{String(addition);}
if (!additionSeparator ) {additionSeparator = '|';} else{String(additionSeparator);}
if (typeof(repeatTimes) != 'number' ) {repeatTimes = 1;}
if (typeof(additionRepeatTimes) != 'number' ) {additionRepeatTimes = 1;}
if (!separator ) {separator = '+';} else{ String(separator);}

let strNew = (str + (addition + additionSeparator).repeat(additionRepeatTimes).slice(0,(addition + additionSeparator).repeat(additionRepeatTimes).length - additionSeparator.length) + separator).repeat(repeatTimes);
    strNew = strNew.slice(0, strNew.length - (separator.length));
  return strNew;
}

console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))

module.exports = {
  repeater
};
