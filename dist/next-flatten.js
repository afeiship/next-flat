/*!
 * name: @feizheng/next-flatten
 * url: https://github.com/afeiship/next-flatten
 * version: 1.0.0
 * date: 2019-11-23T07:27:50.849Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.flatten = function(inArray) {
    return inArray.reduce(function(flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? nx.flatten(toFlatten) : toFlatten);
    }, []);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.flatten;
  }
})();

//# sourceMappingURL=next-flatten.js.map
