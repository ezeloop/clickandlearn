export default class StrapiClient {
    constructor() { }

    async fetchData(path) {
        const requestURL = `http://localhost:1337/${path}`;
        const response = await fetch(requestURL);
        const data = await response.json();
        return data;
    }
}
