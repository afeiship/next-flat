/*!
 * name: @jswork/next-flatten
 * description: Flattens `array` a single or multiple level deep.
 * homepage: https://github.com/afeiship/next-flatten
 * version: 1.0.0
 * date: 2020-11-20 21:19:03
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.flatten = function (inArray) {
    return inArray.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? nx.flatten(toFlatten) : toFlatten);
    }, []);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.flatten;
  }
})();
