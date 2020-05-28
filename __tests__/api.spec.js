const nx = require('@feizheng/next-js-core2');
require('../src/next-flatten');

describe('next/flatten', function () {
  test('flatten deepth = 1', function () {
    var rs = nx.flatten([[1, 2, 3], [4, 5]]); // [1, 2, 3, 4, 5]
    expect(rs).toEqual([1, 2, 3, 4, 5]);
  });

  test('flatten deepth = multi', function () {
    var rs = nx.flatten([[[1, [1.1]], 2, 3], [4, 5]]); // [1, 1.1, 2, 3, 4, 5]
    expect(rs).toEqual([1, 1.1, 2, 3, 4, 5]);
  });

  test('flatten has repeat elements will not merge unique', function () {
    var rs = nx.flatten([[1, 2, 3], [3, 4, 5]]); // [1, 2, 3, 4, 5]
    expect(rs).toEqual([1, 2, 3, 3, 4, 5]);
  });
});
