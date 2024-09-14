import { Vector } from '@rnacanvas/vectors.oopified';

/**
 * A point that is expressed relative to a reference point.
 *
 * Moves when the reference point moves.
 */
export class RelativePoint {
  #referencePoint: TrackablePoint;

  #displacement = new Vector(0, 0);

  constructor(referencePoint: TrackablePoint) {
    this.#referencePoint = referencePoint;
  }

  get x(): number {
    return this.#referencePoint.x + this.#displacement.x;
  }

  set x(x) {
    this.#displacement.x = x - this.#referencePoint.x;
  }

  get y(): number {
    return this.#referencePoint.y + this.#displacement.y;
  }

  set y(y) {
    this.#displacement.y = y - this.#referencePoint.y;
  }
}

interface TrackablePoint {
  readonly x: number;
  readonly y: number;

  /**
   * The listener is to be called whenever the point moves
   * (i.e., its X or Y coordinates change).
   */
  addEventListener(name: 'move', listener: () => void): void;
}
