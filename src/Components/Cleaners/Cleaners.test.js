import { cleanPeople } from '../Cleaners/Cleaners'
import { fetchAnything } from '../FetchAnything/FetchAnything'
jest.mock('../FetchAnything/FetchAnything')

describe('Cleaners', () => {
    describe('cleanPeople', () => {
        const mockHomeworldUrl = 'www.homewordUrl.com'
        const mockSpeciesUrl = 'www.speciesUrl.com'

        const mockArray = [
            {
        eye_color: "blue",
        homeworld: "https://swapi.co/api/planets/1/",
        mass: "77",
        name: "Luke Skywalker",
        species: ["https://swapi.co/api/species/1/"],
        }, {
        eye_color: "yellow",
        homeworld: "https://swapi.co/api/planets/1/",
        mass: "75",
        name: "C-3PO",
        species: ["https://swapi.co/api/species/2/"],
       
    }]
    let mockHomeworld = {homeworld: 'Tatooine'}
    let mockSpecies = {species: 'Human'}
    let mockPerson = {name: 'Luke Skywalker'}

    const expectedResults = [{name: 'Luke Skywalker', homeworld: "Tatooine", species: 'Human', population: 1000}]

    it('accepts an array and calls fetchAnything', () => {
        cleanPeople(mockArray) 
        expect(fetchAnything).toHaveBeenCalled()
    })

    it.only('returns an array of cleaned people objects', async () => {
        fetchAnything.mockImplementation(() => Promise.resolve(mockArray))
        const result = await cleanPeople(mockArray)
        expect(result).toEqual(expectedResults)
        
    })

    })
})