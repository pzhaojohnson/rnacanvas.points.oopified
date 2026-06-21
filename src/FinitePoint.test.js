import { FinitePoint } from './FinitePoint';

describe('`class FinitePoint`', () => {
  test('`static matching()`', () => {
    var p = FinitePoint.matching({ x: -12.1, y: 88 });

    // creates with matching X and Y coordinates
    expect(p.x).toBe(-12.1);
    expect(p.y).toBe(88);

    // throws for X and Y coordinates that aren't finite
    [NaN, Infinity, -Infinity, 'asdf', null, undefined].forEach(value => {
      expect(() => FinitePoint.matching({ x: value, y: 0 })).toThrow();
      expect(() => FinitePoint.matching({ x: 0, y: value })).toThrow();

      expect(() => FinitePoint.matching({ x: 0, y: 0 })).not.toThrow();
    });
  });

  test('`constructor()`', () => {
    var p = new FinitePoint(18, -80.2);

    // stores X and Y coordinates
    expect(p.x).toBe(18);
    expect(p.y).toBe(-80.2);

    // throws for X and Y coordinates that aren't finite numbers
    [NaN, Infinity, -Infinity, 'asdf', null, undefined].forEach(value => {
      expect(() => new FinitePoint(value, 0)).toThrow();
      expect(() => new FinitePoint(0, value)).toThrow();

      expect(() => new FinitePoint(0, 0)).not.toThrow();
    });
  });

  test('`set()`', () => {
    var p = new FinitePoint(0, 0);

    p.set({ x: 10, y: 20 });

    // sets X and Y coordinates
    expect(p.x).toBe(10);
    expect(p.y).toBe(20);

    var p = new FinitePoint(-10, 80);

    // throws for nonfinite X and Y coordinates
    [NaN, Infinity, -Infinity].forEach(value => {
      expect(() => p.set({ x: value })).toThrow();
      expect(() => p.set({ y: value })).toThrow();

      // the point should remain unchanged
      expect(p.x).toBe(-10);
      expect(p.y).toBe(80);
    });
  });
});
