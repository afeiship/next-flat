import nx from '@jswork/next';

nx.flat = function (inArray) {
  if (inArray.flat) return inArray.flat(Infinity);
  return inArray.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? nx.flat(toFlatten) : toFlatten);
  }, []);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.flat;
}

export default nx.flat;
