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

  set(...args: Parameters<Point['set']>): ReturnType<Point['set']> | never {
    let p = new Point(0, 0);

    // test on a separate point first
    p.set(...args);

    // check for finiteness (will throw for nonfinite coordinates)
    let _ = FinitePoint.matching(p);

    // only edit this point instance if the arguments are good
    super.set(...args);
  }
}
