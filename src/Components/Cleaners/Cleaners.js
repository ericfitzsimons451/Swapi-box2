import fetchAnything from '../FetchAnything/FetchAnything'

export const cleanPeople = (peopleArray) => {
    let cleanedPeople = peopleArray.map( async (person) => {
        const homeworld = await fetchAnything(person.homeworld)
        const species = await fetchAnything(person.species)
        return {name: person.name,
                homeworld: homeworld.name,
                species: species.name,
                population: homeworld.population}
        })
    return cleanedPeople
}

export const cleanPlanets = (planetsArray) => {
    let cleanedPlanets = planetsArray.map( async (planet) => {
        let residents = planet.residents.map(async (resident) => {
            let foundResident = await fetchAnything(resident)
            return foundResident
        })
        let resolvedResidents = await Promise.all(residents)
        return {name: planet.name,
                terrain: planet.terrain,
                population: planet.population,
                climate: planet.climate,
                residents: resolvedResidents}
    })
    return cleanedPlanets
}
export default cleanPlanets

