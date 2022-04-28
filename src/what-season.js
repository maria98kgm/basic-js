const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  
  try {
    if (date[Symbol.toStringTag] !== undefined) throw "Invalid date!";
    else if ((date instanceof Date) == false) throw 'Invalid date!';
  }
  catch(err) {
    throw new Error(err);
  }

  if (date.getMonth() >= 5 && date.getMonth() <= 7) return 'summer';
  else if (date.getMonth() >= 8 && date.getMonth() <= 10) return 'autumn';
  else if (date.getMonth() == 11 || (date.getMonth() >= 0 && date.getMonth() <= 1)) return 'winter';
  else if (date.getMonth() >= 2 && date.getMonth() <= 4) return 'spring'
}

module.exports = {
  getSeason
};
