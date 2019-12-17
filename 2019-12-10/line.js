const createNewPAth = () => {
  const x = null;
  const y = null;
  const path = createElement({
    className: 'point',
    elemType: 'path',
    attributes: [{
      name: 'd',
      value: `L ${x}, ${y}`
    }]
  });
  // append it to the body
  // document.body.appendChild(circle);
  const parentNode = document.body.firstElementChild; // main element
  const refNode = parentNode.firstElementChild; // first div element within main
  // Read up on https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
  // Node APIs in general
  parentNode.insertBefore(path, refNode);
  return path;
};

const createElement = props => {
  const {className, elemType, handlers, attributes = []} = props;
  const element = document.createElement(elemType);
  element.setAttribute('class', className); // Read up on setAttribute
  // element.classList.add(className)
  // loop over all attributes and values
  attributes.forEach(({name, value}) => {
    element.setAttribute(name, value);
  });
  return element;
};

const svg = document.querySelector('.path');
console.log(svg.innerHTML);
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    document.body.addEventListener('mouseup', (e) => {
      //If path of d="" is empty, use M at the beginning of the string
      console.log(e.x, e.y);
      createNewPAth(e.x, e.y);
    });
    document.body.addEventListener('mousedown', (e) => {
      // console.log(e)
    });
    document.body.addEventListener('mouseleave', (e) => {
      // console.log(e)
    });
    document.body.addEventListener('mousemove', (e) => {
      // console.log(e)
    });
  }
});