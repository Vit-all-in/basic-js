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
  if (!Array.isArray(members)) return false
  let result = []
  
  const sorted = members.length == 0 ? false : members.sort();
  for (let i = 0; i < sorted.length; i++) {
     const element = sorted[i];
     if(element === String(element)){
        result.push(element)
     }
  }
  
  return result.map((word) => word = word.trim()[0]).sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }).join('').toUpperCase().trim()
}

module.exports = {
  createDreamTeam
};
