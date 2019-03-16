import fetchAnything from '../FetchAnything/FetchAnything'

export const cleanPeople = async (peopleArray) => {
    const cleanedPeople = peopleArray.map( async (person) => {
        const homeworld = await fetchAnything(person.homeworld)
        const species = await fetchAnything(person.species)
        return {name: person.name,
                homeworld: homeworld.name,
                species: species.name,
                population: homeworld.population}
        })
    return await Promise.all(cleanedPeople)
}

export const cleanPlanets = async (planetsArray) => {
    const cleanedPlanets = planetsArray.map( async (planet) => {
        const residents = planet.residents.map(async (resident) => {
            const foundResident = await fetchAnything(resident)
            return foundResident
        })
        const resolvedResidents = await Promise.all(residents)
        const mappedResidents = resolvedResidents.map((resident) => {
            return resident.name
        })
        return {name: planet.name,
                terrain: planet.terrain,
                population: planet.population,
                climate: planet.climate,
                residents: mappedResidents}
    })
    return await Promise.all(cleanedPlanets)
}

export const cleanVehicles = async (vehiclesArray) => {
    let cleanedVehicles = vehiclesArray.map(async (vehicle) => {
        return {name: vehicle.name,
                model: vehicle.model,
                class: vehicle.vehicle_class,
                passengers: vehicle.passengers}
    })
    return await Promise.all(cleanedVehicles)
}

export default cleanPlanets