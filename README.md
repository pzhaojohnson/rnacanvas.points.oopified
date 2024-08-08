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
let p = new Point(28.1, -55.4);
p.x; // 28.1
p.y; // -55.4

// can be modified
p.x = 101.2;
p.y = 38.1;
```
