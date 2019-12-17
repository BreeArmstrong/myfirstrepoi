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

  addPhantomPoint(x, y) {
    this.phantomPoint = [x, y];
  }

  removePhantomPoint([x, y]) {
    this.phantomPoint = null;
  }

  getDAttribute() {
    const {points} = this;
    console.log(points.slice(1));
    console.log(points);
    const {phantomPoint} = this;
    const lineForPhantomPoint = phantomPoint ? ` L ${phantomPoint[0]},${phantomPoint[1]}` : '';
    if (points.length > 1) {
      const pointsForLine = points.slice(1);
      const lines = pointsForLine.map((val, index) => {
          return ` L${this.getPointDAttribute(index + 1)}`
        }).join('');
      console.log(lines);
      return `M${this.getPointDAttribute(0)}${lines}${lineForPhantomPoint}`
    } else {
      return '';
    }
  }

  getPointDAttribute(index) {
    const [x, y] = this.points[index];
    return ` ${x},${y}`
  }

  getPathElement() {
    const ns = 'http://www.w3.org/2000/svg';
    const path = document.createElementNS(ns, 'path');
    path.setAttributeNS(ns, 'd', this.getDAttribute());
    return path;
  }

  toString() {
    return `<path d="${this.getDAttribute()}" />`
  }
}

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    // create a path object
    printPath();
    // add an event listener for the mouseup
  }
});

function printPath() {
  const svg = document.querySelector('svg');
  const path = new Path();
  // add a listener for the mousedown
  document.body.firstElementChild.addEventListener('mousedown', e => {
    console.log(e)
    const {clientX, clientY} = e;
    path.addPoint(clientX, clientY);
    // console.log(path.getPathElement(), path.toString());
    svg.innerHTML = path.toString();
  });

  document.body.firstElementChild.addEventListener('mousemove', e => {
    const {clientX, clientY} = e;
    console.log(e);
    path.addPhantomPoint(clientX, clientY);
    // console.log(path.getPathElement(), path.toString());
    svg.innerHTML = path.toString();
  });
}
