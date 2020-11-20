(function () {
  require('../src');

  describe('api.basic test', () => {
    test('flatten deepth = 1', function () {
      const rs = nx.flatten([[1, 2, 3], [4, 5]]); // [1, 2, 3, 4, 5]
      expect(rs).toEqual([1, 2, 3, 4, 5]);
    });

    test('flatten deepth = multi', function () {
      const rs = nx.flatten([[[1, [1.1]], 2, 3], [4, 5]]); // [1, 1.1, 2, 3, 4, 5]
      expect(rs).toEqual([1, 1.1, 2, 3, 4, 5]);
    });

    test('flatten has repeat elements will not merge unique', function () {
      const rs = nx.flatten([[1, 2, 3], [3, 4, 5]]); // [1, 2, 3, 4, 5]
      expect(rs).toEqual([1, 2, 3, 3, 4, 5]);
    });
  });
})();
