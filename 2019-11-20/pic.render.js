function render(data, container){
    container.innerHTML = '';
    if(Array.isArray(data) && data.length){
        data.forEach((pic, index) => createNewElement({tag:'div', innerHTML:pic.url, parent:container, className:'pic', customAttributeValue:index}));
    }
}
function createNewElement({tag, innerHTML, parent, className, customAttributeValue}){
    const picElement = document.createElement(tag);
    picElement.innerHTML = innerHTML;
    picElement.classList.add(className);
    picElement.setAttribute('data-index', customAttributeValue);
    parent.appendChild(picElement);

}