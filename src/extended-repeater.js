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
  if (options.repeatTimes) {
    let finale = [];
    let addSep = [];
    for (let i = 0; i < options.repeatTimes; i++) {
      finale.push(`${str}`)
    }
    if (options.additionRepeatTimes > 1) {
      for (let i = 0; i < options.additionRepeatTimes; i++) addSep.push(`${options.addition}`)
      if (options.additionSeparator) addSep = addSep.join(options.additionSeparator);
      else addSep = addSep.join('|');
    }
    else {
      if (options.addition) addSep = `${options.addition}`;
    }
    if (addSep) {
      for (let i = 0; i < finale.length; i++) finale[i] = finale[i] + addSep;
    }
    if (options.separator) return finale.join(options.separator)
    else return finale.join('+')
  } 
  return options.addition ? str + `${options.addition}` : str;
}

console.log(repeater('la', { repeatTimes: 3 }))

module.exports = {
  repeater
};
