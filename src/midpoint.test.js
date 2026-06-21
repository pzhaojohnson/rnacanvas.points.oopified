import { midpoint } from './midpoint';

import { Point } from './Point';

test('`function midpoint()`', () => {
  var mp = midpoint({ x: 50, y: -2 }, { x: 200, y: 1000 });

  expect(mp.x).toBeCloseTo(125);
  expect(mp.y).toBeCloseTo(499);

  // returns a point instance
  expect(mp).toBeInstanceOf(Point);

  var mp = midpoint(
    new Point(-10, 5.5),
    new Point(89.2, 1),
  );

  expect(mp.x).toBeCloseTo(39.6);
  expect(mp.y).toBeCloseTo(3.25);
});
