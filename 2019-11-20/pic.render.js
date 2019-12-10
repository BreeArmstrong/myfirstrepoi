function render(data, container){
    container.innerHTML = '';
    if(Array.isArray(data) && data.length){
        data.forEach((pic, index) => createNewElement({tag:'img', src:pic.download_url, parent:container, className:'pic', customAttributeValue:index}));
    }
}
function createNewElement({tag, src, parent, className, customAttributeValue}){
    const picElement = document.createElement(tag);
    picElement.classList.add(className);
    picElement.setAttribute('src', src);
    parent.appendChild(picElement);

}