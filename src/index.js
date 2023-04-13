import nx from '@jswork/next';

nx.flatten = function (inArray) {
  if (inArray.flat) return inArray.flat(Infinity);
  return inArray.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? nx.flatten(toFlatten) : toFlatten);
  }, []);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.flatten;
}

export default nx.flatten;
