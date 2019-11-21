function render(data,container){
    container.innerHTML = ''; //Step 1: create an empty container
    //Step 2: Check if the data is an array and if it has a length
    if(Array.isArray(data) && data.length){
        //Now we iterate through the array
        data.forEach((user, index) => createNewElement({tag:'div', innerHTML:user.login, parent:container, className:'user', customAttributeValue:index}))
    }

    function createNewElement({tag, innerHTML,parent, className, customAttributeValue}){
        //create a user element:
        const userElement = document.createElement(tag);
        userElement.innerHTML = innerHTML;
        userElement.classList.add(className);
        userElement.setAttribute('data-index', customAttributeValue);
        parent.appendChild(userElement);
    }

}