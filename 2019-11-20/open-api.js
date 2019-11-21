async function getQuote() {
    const promise = fetch('https://programming-quotes-api.herokuapp.com/quotes/random');// fetch an item from programming quotes
    const response = await promise;
    const data = await response.json();
    return data;
}