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
}
