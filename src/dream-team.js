const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = [];
  if (Array.isArray(members)) {
    for (let i in members) {
      if (typeof members[i] == 'string') {
        let noSpaces = members[i].split('').filter(x => x !== ' ');
        console.log(noSpaces)
        teamName.push(noSpaces[0].toUpperCase())
      }
    }
    return teamName.sort().join('')
  }
  else return false;
}

module.exports = {
  createDreamTeam
};
