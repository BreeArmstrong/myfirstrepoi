const createCircle = () => {
  // createElement to create a div that has a className of circle
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
  // append it to the body
  // document.body.appendChild(circle);
  const parentNode = document.body.firstElementChild; // main element
  const refNode = parentNode.firstElementChild; // first div element within main
  // Read up on https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
  // Node APIs in general
  parentNode.insertBefore(circle, refNode);
  return circle;
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


document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    
    const circle = createCircle();
    const {clientHeight, clientWidth} = circle;
    
    console.log('here ... ');
    document.body.addEventListener('mouseup', (event) => {
      
      // event.preventDefault(); // Read up on this ...
      // fix the performance
      // todo: The following for mousemove event
      // todo: requestAnimationFrame
      // todo: debounce
      /*if (!event.ctrlKey) {
        return;
      }*/
      console.log(event);
      const {x, y} = event;
      circle.setAttribute('style', `left: ${x - clientWidth / 2}px; top: ${y - clientHeight / 2}px;`);
      console.log(`The mouse is at ... `, x, y);
    });
  }
});