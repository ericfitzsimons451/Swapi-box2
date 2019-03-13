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

// cargo_capacity: "50000"
// consumables: "2 months"
// cost_in_credits: "150000"
// created: "2014-12-10T15:36:25.724000Z"
// crew: "46"
// edited: "2014-12-22T18:21:15.523587Z"
// films: (2) ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"]
// length: "36.8"
// manufacturer: "Corellia Mining Corporation"
// max_atmosphering_speed: "30"
// model: "Digger Crawler"
// name: "Sand Crawler"
// passengers: "30"
// pilots: []
// url: "https://swapi.co/api/vehicles/4/"
// vehicle_class: "wheeled"

//name, model, class, passengers