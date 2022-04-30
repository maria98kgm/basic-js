const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// 'AEIHQX SX DLLU!'
let allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }
  encrypt(toTranslate, keyWord) {
    if (toTranslate == undefined || keyWord == undefined) throw new Error('Incorrect arguments!')
    let finaleResult = [];
    for (let i = 0, b = 0; i < toTranslate.length; i++, b++) {
      if (!toTranslate[i].match(/[a-z]/i)) {
        finaleResult.push(toTranslate[i]);
        b--;
        continue;
      }
      if (b == keyWord.length) b = 0;
      let jey = (allLetters[(allLetters.indexOf(toTranslate[i].toUpperCase()) + allLetters.indexOf(keyWord[b].toUpperCase())) % 26]);
      finaleResult.push(jey);
    }
    return this.reverse == false ? finaleResult.reverse().join('') : finaleResult.join('')
  }
  decrypt(toTranslate, keyWord) {
    if (toTranslate == undefined || keyWord == undefined) throw new Error('Incorrect arguments!')
    let finaleResult = [];
    for (let i = 0, b = 0; i < toTranslate.length; i++, b++) {
      if (!toTranslate[i].match(/[a-z]/i)) {
        finaleResult.push(toTranslate[i]);
        b--;
        continue;
      }
      if (b == keyWord.length) b = 0;
      let jey = allLetters.indexOf(toTranslate[i].toUpperCase()) - allLetters.indexOf(keyWord[b].toUpperCase());
      if (jey < 0) jey += 26;
      finaleResult.push(allLetters[jey]);
    }
    return this.reverse == false ? finaleResult.reverse().join('') : finaleResult.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
