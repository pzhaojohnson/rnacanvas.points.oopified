import { RelativePoint } from './RelativePoint';

class TrackablePoint {
  #x = 0;
  #y = 0;

  #eventListeners = {
    'move': [],
  };

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }

  set x(x) {
    this.#x = x;

    this.#eventListeners['move'].forEach(listener => listener());
  }

  get y() {
    return this.#y;
  }

  set y(y) {
    this.#y = y;

    this.#eventListeners['move'].forEach(listener => listener());
  }

  addEventListener(name, listener) {
    this.#eventListeners[name].push(listener);
  }
};

describe('`RelativePoint` class', () => {
  it('moves when the reference point moves', () => {
    let referencePoint = new TrackablePoint(18, -32);

    let relativePoint = new RelativePoint(referencePoint);

    relativePoint.x = 25;
    relativePoint.y = -48;

    referencePoint.x = 281;
    expect(relativePoint.x).toBeCloseTo(281 + 7);

    referencePoint.y = 56;
    expect(relativePoint.y).toBeCloseTo(56 - 16);
  });

  test('`x` property', () => {
    let referencePoint = new TrackablePoint(20, 80);

    let relativePoint = new RelativePoint(referencePoint);
    expect(relativePoint.x).toBeCloseTo(20);

    let listeners = [jest.fn(), jest.fn(), jest.fn()];
    listeners.forEach(li => relativePoint.addEventListener('move', li));

    listeners.forEach(li => expect(li).not.toHaveBeenCalled());

    relativePoint.x = 84;
    expect(relativePoint.x).toBeCloseTo(84);

    listeners.forEach(li => expect(li).toHaveBeenCalledTimes(1));
  });

  test('`y` property', () => {
    let referencePoint = new TrackablePoint(-19, 1004);

    let relativePoint = new RelativePoint(referencePoint);
    expect(relativePoint.y).toBeCloseTo(1004);

    let listeners = [jest.fn(), jest.fn(), jest.fn()];
    listeners.forEach(li => relativePoint.addEventListener('move', li));

    listeners.forEach(li => expect(li).not.toHaveBeenCalled());

    relativePoint.y = -282;
    expect(relativePoint.y).toBeCloseTo(-282);

    listeners.forEach(li => expect(li).toHaveBeenCalledTimes(1));
  });

  it('calls movement listeners when the reference point moves', () => {
    let referencePoint = new TrackablePoint(90, 100);

    let relativePoint = new RelativePoint(referencePoint);

    let listeners = [jest.fn(), jest.fn(), jest.fn()];
    listeners.forEach(li => relativePoint.addEventListener('move', li));

    listeners.forEach(li => expect(li).not.toHaveBeenCalled());

    referencePoint.x = -84;
    listeners.forEach(li => expect(li).toHaveBeenCalledTimes(1));

    referencePoint.y = 103;
    listeners.forEach(li => expect(li).toHaveBeenCalledTimes(2));
  });

  test('removing event listeners', () => {
    let referencePoint = new TrackablePoint(1, 2);

    let relativePoint = new RelativePoint(referencePoint);

    let listeners = [jest.fn(), jest.fn(), jest.fn()];
    listeners.forEach(li => relativePoint.addEventListener('move', li));

    relativePoint.y = 5;
    listeners.forEach(li => expect(li).toHaveBeenCalledTimes(1));

    listeners.forEach(li => relativePoint.removeEventListener('move', li));

    relativePoint.y = 6;
    listeners.forEach(li => expect(li).toHaveBeenCalledTimes(1));
  });
});
