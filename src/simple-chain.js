const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (arguments.length == 0) {
      this.chain.push(' ');
    } else if (value === null) {
      this.chain.push('null');
    } else {
      this.chain.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.getLength() || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map(item => `( ${item} )`).join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};