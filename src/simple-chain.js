const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let num = [];
const chainMaker = {
  getLength() {
    return num.length;
  },
  addLink(value) {
    if (value === undefined) num.push('( )')
    else num.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || typeof position !== 'number' || position > num.length-1 || position <= 0) {
      num = [];
      throw new Error("You can't remove incorrect link!")
    }
    num.splice(position-1, 1)
    return this;
  },
  reverseChain() {
    num.reverse();
    return this;
  },
  finishChain() {
    let h = num.join('~~');
    num = [];
    return h;
  }
};

module.exports = {
  chainMaker
};
