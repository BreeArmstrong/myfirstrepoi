async function getPic(){
    const promise = fetch('https://picsum.photos/v2/list');
    const response = await promise;
    const data = await response.json();
    return data;
}