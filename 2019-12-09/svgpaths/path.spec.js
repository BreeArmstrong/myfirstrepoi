// $ npx jest <path to this file>
const Path = require('./path');

test('Path creates the right d attribute', () => {
  const path = new Path();
  path.addPoint(10, 10);
  path.addPoint(10, 90);
  path.addPoint(90, 90);
  path.addPoint(90, 10);
  path.addPoint(10, 10);
  expect(path.getDAttribute()).toBe('M 10,10 L 10,90 L 90,90 L 90,10 L 10,10 z');
});
