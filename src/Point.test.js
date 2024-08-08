import { Point } from './Point';

describe('`Point` class', () => {
  test('`matching()` static method', () => {
    let p = Point.matching({ x: -12.04, y: 88.23 });

    expect(p.x).toBe(-12.04);
    expect(p.y).toBe(88.23);
  });

  test('`x` property', () => {
    let p = new Point(25.7, 29);
    expect(p.x).toBe(25.7);

    // can be modified
    p.x = -15;
    expect(p.x).toBe(-15);
  });

  test('`y` property', () => {
    let p = new Point(100, 12.2);
    expect(p.y).toBe(12.2);

    // can be modified
    p.y = -101.3;
    expect(p.y).toBe(-101.3);
  });

  test('iterability', () => {
    let p = new Point(82.5, 554.1);

    expect([...p]).toStrictEqual([82.5, 554.1]);
  });

  test('`displacementTo()` method', () => {
    let p = new Point(25.1, 88.9);
    let d = p.displacementTo({ x: -13, y: 207.2 });

    expect(d.x).toBeCloseTo((-13) - 25.1);
    expect(d.y).toBeCloseTo(207.2 - 88.9);
  });
});
