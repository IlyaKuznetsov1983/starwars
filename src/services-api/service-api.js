class ServicesApi {
    _apiBasePath = 'http://swapi.dev/api/'


    async getResource(url) {
        const response = await fetch(`${this._apiBasePath}${url}`)

        if (!response.ok) {
            throw new Error('No Connected: Status response ${response.status}')
        }

        return await response.json()
    }

    async getAllPlanets() {
        const response = await this.getResource('/planets/')
        return await response.results
    }

    async getPlanet(id) {
        const response = await this.getResource(`/planets/${id}`)
        return this._transformPlanetData(response)

    }

    async getAllPeoples() {
        const response = await this.getResource('/peoples/')
        return await response.results
    }

    async getPeople(id) {
        const response = await this.getResource('/people/${id}')
        console.log(response)
        return await response
    }

    async getAllStarships() {
        const response = await this.getResource('/starships/')
        return await response.results
    }

    async getStarship(id) {
        const response = await this.getResource('/starships/${id}')
        console.log(response)
        return await response
    }

    _extractId(url) {
        const regExp = /\/([0-9]*\/$)/
        return url.match(regExp)[1]
    }

    _transformPlanetData(response) {
        return {
            id: this._extractId(response.url),
            name: response.name,
            population: response.population,
            rotationPeriod: response.rotation_period,
            diameter: response.diameter
        }
    }
}

export default ServicesApi