function render(data, container){
    container.innerHTML = ''; //create a container and initialize it to be empty.
    if(Array.isArray(data) && data.length){
        data.forEach((quote, index) => displayQuote('div', quote.author, container,  'quote', index))
    }
}

function displayQuote(tag, innerHTML, parent, className, customAttributeValue){
    const quoteElement = document.createElement(tag);
    quoteElement.setAttribute('data-index', customAttributeValue);
    quoteElement.classList.add(className);
    quoteElement.innerHTML = innerHTML;
    parent.appendChild(quoteElement);
}