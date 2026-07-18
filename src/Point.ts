import type { PointLike } from './PointLike';

import { Vector } from '@rnacanvas/vectors.oopified';

import type { VectorLike } from '@rnacanvas/vectors.oopified';

import { isNumber } from '@rnacanvas/value-check';

export class Point {
  static matching(p: PointLike): Point {
    return new Point(p.x, p.y);
  }

  constructor(public x: number, public y: number) {}

  [Symbol.iterator]() {
    return [this.x, this.y].values();
  }

  set(values?: { x?: number, y?: number }): void {
    if (isNumber(values?.x)) {
      this.x = values.x;
    }

    if (isNumber(values?.y)) {
      this.y = values.y;
    }
  }

  /**
   * Moves the point (i.e., edits the point in-place) by the specified X and Y components.
   */
  drag(x: number, y: number): void {
    this.displace({ x, y });
  }

  /**
   * Displace the point by a vector.
   *
   * Modifies the point (without returning a new point).
   */
  displace(vector: VectorLike): void {
    let v = Vector.matching(vector);

    this.x += v.x;
    this.y += v.y;
  }

  /**
   * Creates and returns a new point that is the current point displaced by the specified vector.
   *
   * Does not modify the current point.
   */
  displaced(vector: VectorLike): Point {
    let p = Point.matching(this);

    p.displace(vector);

    return p;
  }

  /**
   * Returns the vector going from this point to the specified point.
   */
  displacementTo(p: PointLike): Vector {
    return new Vector(p.x - this.x, p.y - this.y);
  }

  /**
   * Returns the vector going from the specified point to this point.
   */
  displacementFrom(p: PointLike): Vector {
    return new Vector(this.x - p.x, this.y - p.y);
  }

  /**
   * Returns the distance from this point to the specified point.
   */
  distanceTo(p: PointLike): number {
    return this.displacementTo(p).magnitude;
  }

  /**
   * Returns the distance from the specified point to this point.
   */
  distanceFrom(p: PointLike): number {
    return this.distanceTo(p);
  }

  /**
   * Returns the angle (in radians)
   * that is the direction from this point to the specified point
   * in the standard Cartesian coordinate system.
   */
  directionTo(p: PointLike): number {
    return this.displacementTo(p).direction;
  }

  /**
   * Returns the angle (in radians)
   * that is the direction from the specified point to this point
   * in the standard Cartesian coordinate system.
   */
  directionFrom(p: PointLike): number {
    return this.displacementFrom(p).direction;
  }

  /**
   * Creates and returns a deep copy of the point.
   */
  deepCopy(): Point {
    return new Point(this.x, this.y);
  }
}
