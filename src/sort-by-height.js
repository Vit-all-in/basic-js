const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let a = [];
   for (let i = 0; i < arr.length; i++) {
     if(arr[i] !== -1){
       a.push(arr[i])
     } 
   }
   a.sort((a,b) => a -b)
   return arr.map(c => {
      if (c !== -1) {
          return a.shift();
      }
      return -1;
  })
}

module.exports = {
  sortByHeight
};
