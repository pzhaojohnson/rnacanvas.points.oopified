import { Point } from './Point';

describe('`Point` class', () => {
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
});
