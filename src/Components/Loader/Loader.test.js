import React from 'react'
import { shallow } from 'enzyme'
import Loader from '../Loader/Loader'

describe('Loader', () => {
    it('renders the component with loading text', () => {
        const wrapper = shallow(<Loader />)
        const title = <h1>SwapiBox</h1>
        const loadText1 = <h2>Content loading...</h2>
        const loadText2 = <h3>May the <span>Force</span> be with you!</h3>

        expect(wrapper.contains(title, loadText1, loadText2)).toEqual(true)
    })

    it('should match the snapshot with no data passed down', () => {
        const wrapper = shallow(<Loader />)
        expect(wrapper).toMatchSnapshot()
    })
})