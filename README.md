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

Creates and returns a new `Point` instance matching a point-like object
(e.g., an object with `x` and `y` properties).

```javascript
var p = Point.matching({ x: 901.7, y: -11 });

p.x; // 901.7
p.y; // -11
```

### `displacementTo()`

Returns a new `Vector` instance
that is the vector going from the point
to the specified point.

See [@rnacanvas/vectors.oopified](https://pzhaojohnson.github.io/rnacanvas.vectors.oopified/) package
for documentation on the `Vector` class.

```javascript
var p = new Point(91, 26);
var d = p.displacementTo({ x: 81, y: 34 });

d.x; // -10
d.y; // 8
```

### `displacementFrom()`

Returns a new `Vector` instance
that is the vector going from the specified point
to the point that this method was called on.

See [@rnacanvas/vectors.oopified](https://pzhaojohnson.github.io/rnacanvas.vectors.oopified/) package
for documentation on the `Vector` class.

```javascript
var p = new Point(105, 202);
var d = p.displacementFrom({ x: 5, y: 224 });

d.x; // 100
d.y; // -22
```

### `distanceTo()`

Returns the distance from a point to a specified point.

```javascript
var p = new Point(10, 10);

p.distanceTo({ x: 13, y: 14 }); // 5
```

### `distanceFrom()`

An alias for the `distanceTo()` method.

```javascript
var p = new Point(80, 70);

p.distanceFrom({ x: 75, y: 82 }); // 13
```
