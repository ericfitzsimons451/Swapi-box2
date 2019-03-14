import fetchAnything from '../FetchAnything/FetchAnything'

export const cleanPeople = (peopleArray) => {
    const cleanedPeople = peopleArray.map( async (person) => {
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
    const cleanedPlanets = planetsArray.map( async (planet) => {
        const residents = planet.residents.map(async (resident) => {
            const foundResident = await fetchAnything(resident)
            return foundResident
        })
        const resolvedResidents = await Promise.all(residents)
        return {name: planet.name,
                terrain: planet.terrain,
                population: planet.population,
                climate: planet.climate,
                residents: resolvedResidents}
    })
    return cleanedPlanets
}

export const cleanVehicles = (vehiclesArray) => {
    let cleanedVehicles = vehiclesArray.map(async (vehicle) => {
        return {name: vehicle.name,
                model: vehicle.model,
                class: vehicle.vehicle_class,
                passengers: vehicle.passengers}
    })
    return cleanedVehicles
}

export default cleanPlanets