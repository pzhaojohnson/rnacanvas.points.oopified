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

### `displace()`

Displace a point by a vector.

Modifies the point itself (does not return a new point).

```javascript
var p = new Point(10, 20);

p.displace({ x: 5, y: -30 });

p.x; // 15
p.y; // -10

// vectors can also be specified in terms of magnitude and direction
p.displace({ magnitude: 2, direction: Math.PI / 3 });

p.x; // 15 + 1
p.y; // -10 + 3**0.5
```

### `displaced()`

Similar to the `displace()` method but creates and returns a new point
that is the current point displaced by the specified vector.

Does not modify the current point.

```javascript
var p1 = new Point(10, 20);

var p2 = p1.displaced({ x: 5, y: -30 });

p2.x; // 15
p2.y; // -10

// unchanged
p1.x; // 10
p1.y; // 20

// vectors can also be specified in terms of magnitude and direction
var p3 = p1.displaced({ magnitude: 2, direction: Math.PI / 3 });

p3.x; // 10 + 1
p3.y; // 20 + 3**0.5
```

### `displacementTo()`

Returns a new `Vector` instance
that is the vector going from the point
to the specified point.

See [@rnacanvas/vectors.oopified](https://pzhaojohnson.github.io/rnacanvas.vectors.oopified/) package
for documentation on the `Vector` class.

```javascript
var p = new Point(0, 0);
var d = p.displacementTo({ x: 1, y: Math.sqrt(3) });

d.x; // 1
d.y; // Math.sqrt(3)

d.magnitude; // 2
d.direction; // Math.PI / 3
```

### `displacementFrom()`

Returns a new `Vector` instance
that is the vector going from the specified point
to the point that this method was called on.

See [@rnacanvas/vectors.oopified](https://pzhaojohnson.github.io/rnacanvas.vectors.oopified/) package
for documentation on the `Vector` class.

```javascript
var p = new Point(0, 0);
var d = p.displacementFrom({ x: 1, y: Math.sqrt(3) });

d.x; // -1
d.y; // -Math.sqrt(3)

d.magnitude; // 2
d.direction; // -2 * Math.PI / 3
```

### `distanceTo()`

Returns the distance from the point to the specified point.

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

### `directionTo()`

Returns the angle (in radians)
that is the direction from the point to the specified point
in the standard Cartesian coordinate system.

```javascript
var p = new Point(0, 0);

p.directionTo({ x: 1, y: 0 }); // 0
p.directionTo({ x: 0, y: 1 }); // Math.PI / 2
p.directionTo({ x: -1, y: -1 }); // -3 * Math.PI / 4
```

### `directionFrom()`

Returns the angle (in radians)
that is the direction from the specified point
to the point that this was method was called on
in the standard Cartesian coordinate system.

```javascript
var p = new Point(0, 0);

p.directionFrom({ x: 1, y: 0 }); // Math.PI
p.directionFrom({ x: 0, y: 1 }); // -Math.PI / 2
p.directionFrom({ x: -1, y: -1 }); // Math.PI / 4
```

## `class FinitePoint`

A point whose construction will throw an error
if its X and Y coordinates aren't finite numbers.

```javascript
var p = new FiniteNumber(10, 20);

// works fine
p.x; // 10
p.y; // 20

new FiniteNumber(NaN, 20); // throws
new FiniteNumber(10, Infinity); // throws
```

### `static matching()`

Creates a finite point object with X and Y coordinates matching those of the input point-like object.

Throws if either X or Y coordinates aren't finite numbers.

```javascript
var p = FiniteNumber.matching({ x: 10, y: 20 });

// works fine
p.x; // 10
p.y; // 20

FiniteNumber.matching({ x: NaN, y: 20 }); // throws
FiniteNumber.matching({ x: 10, y: Infinity }); // throws

// this is allowed
var p = new Point(NaN, 0);

// but this will throw
FiniteNumber.matching(p);
```

## `RelativePoint`

The `RelativePoint` class
represents a point that is expressed relative to a reference point.

```javascript
var refP; // reference point
var relP = new RelativePoint(refP);

refP.x = 57;
refP.y = -81;

// moves with the reference point
relP.x; // 57
relP.y; // -81

relP.x += 12;
relP.y -= 15;

refP.x = 102;
refP.y = 3;

relP.x; // 102 + 12
relP.y; // 3 - 15
```

The reference point must fulfill the `TrackablePoint` interface below.

```typescript
interface TrackablePoint {
  readonly x: number;
  readonly y: number;

  // the listener is to be called whenever the point moves
  // (i.e., whenever its X or Y coordinates change)
  addEventListener(name: 'move', listener: () => void): void;
}
```

### Listening for move events

Listeners can be attached
that will be called whenever a relative point moves
(i.e., whenever the reference point moves
or its displacement from the reference point changes).

```javascript
var refP; // reference point
var relP = new RelativePoint(refP);

var listener = () => {};
relP.addEventListener('move', listener);

refP.x += 1000;
listener; // called once

relP.x -= 12;
listener; // called a second time

relP.removeEventListener('move', listener);

relP.x += 20;
listener; // not called a third time
```

## `function midpoint()`

Calculates the average of two points
(and returns the result as a `Point` instance).

```javascript
var mp = midpoint({ x: 0, y: 0 }, { x: 10, y: 20 });

mp.x; // 5
mp.y; // 10

mp instanceof Point; // true

// can also be called on `Point` instances
var mp = midpoint({ x: 0, y: 0 }, new Point(10, 20));

mp.x; // 5
mp.y; // 10
```
