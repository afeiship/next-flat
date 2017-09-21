var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-flatten');

describe('next/flatten', function () {

  it('flatten deepth = 1', function () {
    var rs = nx.flatten([[1, 2, 3], [4, 5]]); // [1, 2, 3, 4, 5]
    assert.deepEqual(rs, [1, 2, 3, 4, 5]);
  });


  it('flatten deepth = multi', function () {
    var rs = nx.flatten([[[1, [1.1]], 2, 3], [4, 5]]); // [1, 1.1, 2, 3, 4, 5]
    assert.deepEqual(rs, [1, 1.1, 2, 3, 4, 5]);
  });

});
