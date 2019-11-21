async function getRepos(){
    const promise = fetch('https://api.github.com/users/breegrizzell/repos'); //fetch an item from random.dog
    const response = await promise; //must use await with async
    const data = await response.json();
    return data;
}