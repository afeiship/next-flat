/*!
 * name: @feizheng/next-flatten
 * description: Flattens `array` a single or multiple level deep.
 * homepage: https://github.com/afeiship/next-flatten
 * version: 1.1.0
 * date: 2020-05-28T08:06:45.133Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.flatten = function (inArray) {
    return inArray.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? nx.flatten(toFlatten) : toFlatten);
    }, []);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.flatten;
  }
})();

//# sourceMappingURL=next-flatten.js.map
