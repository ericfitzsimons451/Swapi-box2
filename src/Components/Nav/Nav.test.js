import React from 'react'
import { shallow, mount } from 'enzyme'
import Nav from '../Nav/Nav'

describe ('Nav', () => {
    // it('should match the snapshot with 3 functions passed down', () => {
    //     // const title = <h1>SwapiBox</h1>
    //     // const button1 = <button>People</button>
    //     // const button2 = <button>Planets</button>
    //     // const button3 = <button>Vehicles</button>
    //     // const button4 = <button>Favorites <span>0</span></button>

    //     const wrapper = shallow(<Nav
    //                                 fetchPeople={jest.fn()} 
    //                                 fetchPlanets={jest.fn()} 
    //                                 fetchVehicles={jest.fn()} />)

    // expect(wrapper).toMatchSnapshot()
    // // expect(wrapper.contains(button1, button2, button3, button4)).toEqual(true)
    // })

   
    it('should call the fetchPeople prop when clicked', () => {
        const mockFetchPeople = jest.fn()
        const wrapper = mount(<Nav
            fetchPeople={mockFetchPeople} />)
        
        wrapper.find('.fetchPeopleBtn').simulate('click')
        expect(mockFetchPeople).toBeCalled()
    })

    it('should call the fetchPlanets prop when clicked', () => {
        const mockFetchPlanets = jest.fn()
        const wrapper = mount(<Nav fetchPlanets={mockFetchPlanets} />)
        wrapper.find('.fetchPlanetsBtn').simulate('click')
        expect(mockFetchPlanets).toBeCalled()
    })

    it('should call the fetchVehicles prop when clicked', () => {
        const mockFetchVehicles = jest.fn()
        const wrapper = mount(<Nav fetchVehicles={mockFetchVehicles} />)
        wrapper.find('.fetchVehiclesBtn').simulate('click')
        expect(mockFetchVehicles).toBeCalled()
    })


})