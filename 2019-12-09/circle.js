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
  
    const circle = createCircle();
    const {clientHeight, clientWidth} = circle;
  
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
      // return {x,y};
    });
    
    let isDown = false;
    
    
      document.body.addEventListener('mousedown', (event) => {
        isDown = true;
        console.log(event);
        const {x1, y1} = event;
        console.log('mousedown is active...');
        console.log(`The mouse is at ... `, x1, y1);
        
        
        document.body.addEventListener('mousemove', (event) => {
          console.log('Tracking the cursor across the screen...')
          
        })
      });
      
      // if(isDown === true) {
      
      // }
    
  }
});