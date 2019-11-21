async function getCatFacts() {
    const promise = fetch('https://programming-quotes-api.herokuapp.com/quotes/random');
    const response = await promise;
    const data = await response.json();
    return data;
}