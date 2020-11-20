# next-flatten
> Flattens `array` a single or multiple level deep.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-flatten
```

## usage
```js
import '@jswork/next-flatten';

const res = nx.flatten([[1, 2, 3], [4, 5]]); 
// [1, 2, 3, 4, 5]
```

## other solution
```js
function flattenArrayOfArrays(a, r) {
  if (!r) { r = [] }
  for (var i = 0; i < a.length; i++) {
    if (a[i].constructor == Array) {
      r.concat(flattenArrayOfArrays(a[i], r));
    } else {
      r.push(a[i]);
    }
  }
  return r;
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-flatten/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-flatten
[version-url]: https://npmjs.org/package/@jswork/next-flatten

[license-image]: https://img.shields.io/npm/l/@jswork/next-flatten
[license-url]: https://github.com/afeiship/next-flatten/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-flatten
[size-url]: https://github.com/afeiship/next-flatten/blob/master/dist/next-flatten.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-flatten
[download-url]: https://www.npmjs.com/package/@jswork/next-flatten
