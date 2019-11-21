async function getRepos(){
    const promise = fetch('https://api.github.com/users/breegrizzell/repos');
    const response = await promise; //must use await with async
    const data = await response.json();
    return data;
}