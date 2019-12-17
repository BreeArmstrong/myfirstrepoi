class Path {
  // todo: Use a Point class and convert every point array into a point object
  constructor(x, y) {
    // Correct implementation in terms of concept
    // this.start = [x, y];
    this.points = [];
    if (typeof x === 'number' && typeof y === 'number') {
      this.addPoint([x, y]);
    }
  }

  addPoint(x, y) {
    // check if the start exists? If not make this the start
    this.points.push([x, y]);
  }

  getDAttribute() {
    const {points} = this;
    // console.log(points.slice(1));
    // console.log(points);
    if (points.length > 1) {
      const pointsForLine = points.slice(1);
      const lines = pointsForLine.map((val, index) => {
          return ` L${this.getPointDAttribute(index + 1)}`
        }).join('');
      console.log(lines);
      return `M${this.getPointDAttribute(0)}${lines} z`
    } else {
      return '';
    }
  }

  getPointDAttribute(index) {
    const [x, y] = this.points[index];
    return ` ${x},${y}`
  }

  toString() {
    return `<path d="${this.getDAttribute()}"/>`
  }
}

module.exports = Path;

// test code
