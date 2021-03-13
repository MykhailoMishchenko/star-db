class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error (`Good news: it is a dance party. 
            Bad news: the post you have requested could not be found. Error ${res.status}`)
        }
        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }
    getPerson(id){
        return this.getResource(`/people/${id}`)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }
    getPlanet(id){
        return this.getResource(`/planet/${id}`)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }
    getStarship(id){
        return this.getResource(`/starships/${id}`)
    }
}

export default SwapiService;