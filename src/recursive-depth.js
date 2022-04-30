const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.temp = 1;
    this.first = [];
  }
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return;
    for (let i in arr) {
      if (i == 0 && this.first.length == 0) this.first.push(arr);
      if (Array.isArray([arr[i]])) {
        this.temp++;
        this.calculateDepth(arr[i]);
        let j;
        if (typeof arr[i] == 'object') {
          j = arr[i].filter(x => {
            if (Array.isArray(x)) return x;
          });
          if (j.length == 0) {
            if(this.temp > this.depth) {
              this.depth = this.temp;
            }
          }
        }
        this.temp--;
      }
    }
    // console.log(arr)
    let j = this.depth;
    if (arr == this.first[0]) {
      this.temp = 1;
      this.depth = 1;
      this.first = [];
    }
    return j;
    // let depth = 1;
    // let temp = 1;
    // function recur(arr) {
    //   if (!Array.isArray(arr)) return;
    //   for (let i in arr) {
    //     if (Array.isArray([arr[i]])) {
    //       temp++;
    //       recur(arr[i]);
    //       let j;
    //       if (typeof arr[i] == 'object') {
    //         j = arr[i].filter(x => {
    //           if (Array.isArray(x)) return x;
    //         });
    //         if (j.length == 0) {
    //           if(temp > depth) {
    //             depth = temp;
    //           }
    //         }
    //       }
    //       temp--;
    //     }
    //   }
    //   return depth;
    // }
    // let pretty = recur(arr);
    // depth = 1;
    // temp = 1;
    // return pretty;
  }
}


// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));

module.exports = {
  DepthCalculator
};
