import { Point } from './Point';

import type { PointLike } from './PointLike';

import { isFiniteNumber } from '@rnacanvas/value-check';

/**
 * A point with finite number coordinates.
 */
export class FinitePoint extends Point {
  static matching(p: PointLike): FinitePoint {
    let matchingPoint = Point.matching(p);

    return new FinitePoint(matchingPoint.x, matchingPoint.y);
  }

  constructor(x: number, y: number) {
    super(x, y);

    if (!isFiniteNumber(x) || !isFiniteNumber(y)) {
      throw new Error(`Finite points must have finite number coordinates: (${x}, ${y}).`);
    }
  }
}
