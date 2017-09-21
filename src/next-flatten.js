(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.flatten = function (inArray) {
    return inArray.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? nx.flatten(toFlatten) : toFlatten);
    }, []);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.flatten;
  }

}());
