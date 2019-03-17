import React from 'react';
import App from '../App/App.js'
import { shallow, mount } from 'enzyme'

const WebSocket = require('ws')
global.WebSocket= WebSocket

describe('App', () => {
  describe('makeFirstFetch', () => {
    let mockTextCrawl;
    let wrapper;
    let mockFetch;

    beforeEach(() => {
      
      mockTextCrawl = 'The galactic senate does stuff...'
      mockFetch = window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({mockTextCrawl})
      }))
      wrapper = shallow(<App />)
    })
    it.skip('calls fetch with the correct url', async () => {
      const mockUrl =`https://swapi.co/api/films/1`
      expect(mockFetch).toHaveBeenCalledWith(mockUrl)
      
    })

    it.skip('resets state on a successful request', () => {
      const initialState = ''
      wrapper = shallow(<App />)
      wrapper.setState({crawlText: initialState})
      
    
      mockTextCrawl = {crawlText: 'The galactic senate does stuff...'}
      wrapper.instance().componentDidMount()
      expect(wrapper.state).toEqual({crawlText: mockTextCrawl})
    })

    it.skip('sets an error when the fetch fails', () => {

    })
  })

  describe('fetchPeople', () => {
    let mockUrl;
    let mockPeople;
    let mockState;
    let wrapper;
    let fetchAnything;
    let cleanPeople;

    beforeEach(() => {
      mockUrl = 'https://swapi.co/api/people'
      fetchAnything = jest.fn()
      cleanPeople = jest.fn()
      wrapper = mount(<App />)

      mockPeople = [
        {name: "C-3PO", height: "167", mass: "75", hair_color: "n/a", skin_color: "gold"},
        {name: "R2-D2", height: "96", mass: "32", hair_color: "n/a", skin_color: "white, blue"},  
        {name: "Darth Vader", height: "202", mass: "136", hair_color: "none", skin_color: "white"}
      ]

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockPeople)
      }))
    })
    it.skip('calls fetchAnything with the correct url', async () => {
     wrapper.instance().fetchPeople()
     expect(fetchAnything(mockUrl)).toHaveBeenCalledWith(mockUrl)

    })

    it('throws an error if the fetch fails', async () => {
     
      await wrapper.instance().fetchPeople()
      window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(
        new Error('error making fetch')
      ))
    })

    it('it calls cleanPeople and returns an array of people objects', async () => {
      const mockStatePreFetch = []
      const mockCleanedPeople = [
        {name: "C-3PO", species: 'Droid', homeworld: 'Tatooine', population: 10},
        {name: "R2-D2", species: 'Droid', homeworld: 'Naboo', population: 200},
        {name: "Darth Vader", species: 'Human', homeworld: 'Tatooine', population: 600}
      ]
      await wrapper.instance().fetchPeople()
      expect(cleanPeople).toHaveBeenCalled()

    })

    it('resets state and adds a current selection value', async () => {
      const mockStatePreFetch = []
      const mockCleanedPeople = [
        {name: "C-3PO", species: 'Droid', homeworld: 'Tatooine', population: 10},
        {name: "R2-D2", species: 'Droid', homeworld: 'Naboo', population: 200},
        {name: "Darth Vader", species: 'Human', homeworld: 'Tatooine', population: 600}
      ]
      expect(wrapper.state('people')).toEqual(mockStatePreFetch)
      await wrapper.instance().fetchPeople()
      expect(cleanPeople).toHaveBeenCalled()
      expect(wrapper.state('people')).toEqual(mockCleanedPeople)

    })



  })
})