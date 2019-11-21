function render(data, container) {
    container.innerHTML = ''; //create a new container and initialize it to empty container.
    if(Array.isArray(data) && data.length){ //Checks to see if the data from the api is an array and if it isn't an empty one
         //Make a dive element
        //Attach repo name and the ssh url to it.
        data.forEach((repo, index) => createNewElement({tag:'div', innerHTML:repo.name, parent:container, className:'repo', customAttributeValue:index}))
    }
}

function createNewElement({tag, innerHTML, parent, className, customAttributeValue}){
    const repoElement = document.createElement(tag);
    repoElement.setAttribute('data-index', customAttributeValue);
    repoElement.classList.add(className);
    repoElement.innerHTML = innerHTML;
    parent.appendChild(repoElement);
}