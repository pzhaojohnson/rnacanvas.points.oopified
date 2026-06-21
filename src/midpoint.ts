import { Point } from './Point';

import type { PointLike } from './PointLike';

import { average } from '@rnacanvas/math';

/**
 * Returns the average of the two points.
 */
export function midpoint(p1: PointLike, p2: PointLike): Point {
  return new Point(
    average([p1.x, p2.x]),
    average([p1.y, p2.y]),
  );
}
