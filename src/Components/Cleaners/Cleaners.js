import fetchAnything from '../FetchAnything/FetchAnything'

export const cleanPeople = (peopleArray) => {
    let cleanedPeople = peopleArray.map( async (person) => {
        const homeworld = await fetchAnything(person.homeworld)
        const species = await fetchAnything(person.species)
        console.log(homeworld)
        return {name: person.name,
                homeworld: homeworld.name,
                species: species.name,
                population: homeworld.population}
        })
    return cleanedPeople
}

export const cleanPlanets = (planetsArray) => {
    let cleanedPlanets = planetsArray.map(async (planet) => {
        
    })
    return cleanedPlanets
}

export default cleanPeople

