# Installation

With `npm`:

```
npm install @rnacanvas/points.oopified
```

# Usage

All exports of this package can be accessed as named imports.

```javascript
// an example import
import { Point } from '@rnacanvas/points.oopified';
```

## `Point`

The `Point` class represents a 2D point.

```javascript
var p = new Point(28.1, -55.4);

p.x; // 28.1
p.y; // -55.4

// can be modified
p.x = 101.2;
p.y = 38.1;

// is iterable
[...p]; // [101.2, 38.1]
```

### `static matching()`

Create a `Point` instance matching a point-like object
(e.g., an object with `x` and `y` properties).

```javascript
var p = Point.matching({ x: 901.7, y: -11 });

p.x; // 901.7
p.y; // -11
```
