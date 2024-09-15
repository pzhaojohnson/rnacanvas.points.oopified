import { Vector } from '@rnacanvas/vectors.oopified';

/**
 * A point that is expressed relative to a reference point.
 *
 * Moves when the reference point moves.
 */
export class RelativePoint {
  #referencePoint: TrackablePoint;

  #displacement = new Vector(0, 0);

  #eventListeners: EventListeners = {
    'move': [],
  };

  constructor(referencePoint: TrackablePoint) {
    this.#referencePoint = referencePoint;

    referencePoint.addEventListener('move', () => this.#callEventListeners('move'));
  }

  get x(): number {
    return this.#referencePoint.x + this.#displacement.x;
  }

  set x(x) {
    this.#displacement.x = x - this.#referencePoint.x;

    this.#callEventListeners('move');
  }

  get y(): number {
    return this.#referencePoint.y + this.#displacement.y;
  }

  set y(y) {
    this.#displacement.y = y - this.#referencePoint.y;

    this.#callEventListeners('move');
  }

  addEventListener(name: 'move', listener: EventListener): void {
    this.#eventListeners[name].push(listener);
  }

  removeEventListener(name: 'move', listener: EventListener): void {
    this.#eventListeners[name] = this.#eventListeners[name].filter(li => li !== listener);
  }

  #callEventListeners(name: 'move'): void {
    this.#eventListeners[name].forEach(listener => listener());
  }
}

type EventListener = () => void;

interface EventListeners {
  'move': EventListener[];
};

interface TrackablePoint {
  readonly x: number;
  readonly y: number;

  /**
   * The listener is to be called whenever the point moves
   * (i.e., its X or Y coordinates change).
   */
  addEventListener(name: 'move', listener: EventListener): void;
}
