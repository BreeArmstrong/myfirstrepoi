const createCircle = () => {
  //Make a div element to hold the circle
  const left = 0;
  const top = 0;
  const circle = createElement({
    className: 'circle',
    elemType: 'div',
    attributes: [{
      name: 'style',
      value: `left: ${left}px; top: ${top}px;`
    }]
  });
  //Add the circle to the webpage
  const parentNode = document.body.firstElementChild;
  const refNode = parentNode.firstElementChild;
  parentNode.insertBefore(circle, refNode);
  return circle;
};
const createElement = props => {
  const {className, elemType, handlers, attributes = []} = props;
  const element = document.createElement(elemType);
  element.setAttribute('class', className);
  attributes.forEach(({name, value}) => {
    element.setAttribute(name, value);
  });
  return element;
};

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    const divElement = createCircle();
    let isMouseDown = false,
      height = divElement.clientHeight,
      width = divElement.clientWidth;
    document.body.addEventListener('mouseup', () => {
      isMouseDown = false
    });
    document.body.addEventListener('mousedown', () => {
      isMouseDown = true
    });
    document.body.addEventListener('mouseleave', () => {
      isMouseDown = false
    });
    document.body.addEventListener('mousemove', (evt) => {
      if (isMouseDown) {
        console.log(isMouseDown);
        const {clientX, clientY} = evt;
        const isHeightChanged = height < clientY,
          isWidthChanged = width < clientX;
        if (isHeightChanged || isWidthChanged) {
          isHeightChanged && (height = clientY);
          isWidthChanged && (width = clientX);
          divElement.setAttribute('style', `width: ${width}px; height: ${height}px`);
        }
      }
    });
  }
});

