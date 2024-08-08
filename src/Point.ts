export class Point {
  constructor(public x: number, public y: number) {}

  [Symbol.iterator]() {
    return [this.x, this.y].values();
  }
}
