const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0,
    d = [];
  while (n) {
    d.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let index = 0; index < d.length; index++) {
    let n = 0;
    for (let j = d.length - 1; j >= 0; j--) {
      if (j !== index) {
        n = n * 10 + d[j];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

module.exports = {
  deleteDigit
};