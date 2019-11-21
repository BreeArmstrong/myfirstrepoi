function render(data, container) {
    container.innerHTML = ''; //create a new container and initialize it to empty container.
    if(Array.isArray(data) && data.length){ //Checks to see if the data from the api is an array and if it isn't an empty one
         //Make a dive element
        //Attach repo name and the ssh url to it.
        data.forEach((repo, index) => {'div', repo.name, container, 'repo', index})
    }
}

function createNewElement(){
    const repoElement = document.createElement(this.tag);
    repoElement.setAttribute('data-index', this.customAttributeValue);
    repoElement.classList.add(this.className);
    repoElement.innerHTML = this.innerHTML;
    this.parent.appendChild(repoElement);
}