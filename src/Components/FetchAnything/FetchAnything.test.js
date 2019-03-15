import { fetchAnything}  from './FetchAnything/fetchAnything'

describe('fetchAnything', () => {
    let mockData;
    let mockUrl;
    
    beforeEach(() => {
        mockData = [
            {name: 'Luke',
             homeworld: 'Tatooine',
             species: 'Human',
             population: 10}
        ];
        mockUrl = 'https://swapi.co/api/people'
        window.fetch = jest.fn().mockImplementation(() => (
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(
                    mockData
                )
            })
        ))
    })
    it('calls fetch with the correct data', () => {
        fetchAnything(mockUrl)
        expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('returns an array of data when the status is OK', () => {

    })

    it('throws an error if the status is not OK', () => {

    })
})