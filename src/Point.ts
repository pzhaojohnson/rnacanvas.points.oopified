import { Vector } from '@rnacanvas/vectors.oopified';

type PointLike = {
  x: number;
  y: number;
};

export class Point {
  static matching(p: PointLike): Point {
    return new Point(p.x, p.y);
  }

  constructor(public x: number, public y: number) {}

  [Symbol.iterator]() {
    return [this.x, this.y].values();
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
}
