async function getUserData(){
    const promise = fetch('https://api.github.com/users/breegrizzell');
    const response = await promise;
    const data = await response.json();
    return data;
}
