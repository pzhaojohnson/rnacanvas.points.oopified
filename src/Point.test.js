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

  test('`displacementFrom()` method', () => {
    let p = new Point(129, -84);
    let d = p.displacementFrom({ x: 101, y: 82 });

    expect(d.x).toBeCloseTo(129 - 101);
    expect(d.y).toBeCloseTo((-84) - 82);
  });

  test('`distanceTo()` method', () => {
    let p = new Point(5, 27);

    expect(p.distanceTo({ x: 10, y: 15 })).toBeCloseTo(13);
  });

  test('`distanceFrom()` method', () => {
    let p = new Point(101, 83);

    expect(p.distanceFrom({ x: 93, y: 98 })).toBeCloseTo(17);
  });

  test('`directionTo()` method', () => {
    let p = new Point(5, 18);

    let x = 5 - 2;
    let y = 18 + (2 * Math.sqrt(3));

    expect(p.directionTo({ x, y })).toBeCloseTo(2 * Math.PI / 3);
  });

  test('`directionFrom` method', () => {
    let p = new Point(-4, 12);

    let x = (-4) - (7 * Math.sqrt(3));
    let y = 12 - 7;

    expect(p.directionFrom({ x, y })).toBeCloseTo(Math.PI / 6);
  });
});
