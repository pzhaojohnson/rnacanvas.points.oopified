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

  test('`set()`', () => {
    var p = new Point(0, 1);

    // setting both X and Y coordinates
    p.set({ x: 10, y: 20 });

    expect(p.x).toBe(10);
    expect(p.y).toBe(20);

    // setting just the X coordinate
    p.set({ x: -10 });

    expect(p.x).toBe(-10);
    expect(p.y).toBe(20);

    // setting just the Y coordinate
    p.set({ y: 90 });

    expect(p.x).toBe(-10);
    expect(p.y).toBe(90);

    // setting no coordinates
    p.set({});

    expect(p.x).toBe(-10);
    expect(p.y).toBe(90);

    // calling without any input argument
    p.set();

    expect(p.x).toBe(-10);
    expect(p.y).toBe(90);
  });

  test('`drag()`', () => {
    var p = new Point(2, -7);

    p.drag(-10, 25);

    expect(p.x).toBeCloseTo(-8);
    expect(p.y).toBeCloseTo(18);
  });

  test('`displace()`', () => {
    var p = new Point(25, -17);

    p.displace({ x: -3, y: 28 });

    expect(p.x).toBeCloseTo(22);
    expect(p.y).toBeCloseTo(11);

    p.displace({ magnitude: 10, direction: Math.PI / 3 });

    expect(p.x).toBeCloseTo(27);
    expect(p.y).toBeCloseTo(11 + ((10 / 2) * 3**0.5));
  });

  test('`displaced()`', () => {
    var p1 = new Point(5, 10);

    var p2 = p1.displaced({ x: -2, y: 22 });

    expect(p2.x).toBeCloseTo(3);
    expect(p2.y).toBeCloseTo(32);

    var p3 = p1.displaced({ magnitude: 2, direction: -Math.PI / 3 });

    expect(p3.x).toBeCloseTo(6);
    expect(p3.y).toBeCloseTo(10 - 3**0.5);
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

  test('`deepCopy()`', () => {
    var p1 = new Point(57, -102.9);

    var p2 = p1.deepCopy();

    expect(p2.x).toBe(57);
    expect(p2.y).toBe(-102.9);

    expect(p2).not.toBe(p1);
  });
});
