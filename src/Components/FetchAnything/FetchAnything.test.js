import { fetchAnything }  from '../FetchAnything/fetchAnything.js'

describe('fetchAnything', () => {
    let mockUrl;
    let mockData;

    beforeEach(() => {
        mockUrl = 'https://swapi.co/api/people'
        mockData = {
            name: 'Luke',
        }
        window.fetch = jest.fn().mockImplementation(() => (
            Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve(mockData)               
            })
        ))
    })
    it('calls fetch with the correct data', () => {
        fetchAnything(mockUrl)
        expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('returns an array of data when the status is OK', async () => {
        const result = await fetchAnything(mockUrl)
        expect(result).toEqual(mockData)
    })

    it('throws an error if the status is not OK', async () => {
        window.fetch = jest.fn().mockImplementationOnce(async () => {
            await Promise.resolve({
                ok: false,
                status: 404
            })
            try {
                await fetchAnything(mockUrl)
            } catch (error) {
                expect(error.message).toEqual('Fetch failed.')
            }
        })
    })
})