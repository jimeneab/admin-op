import React from "react";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import Home from '../pages/Home'

configure({ adapter: new Adapter() });


describe('<Home/>', ()=>{

    test('display correctly title', () => {
        const wrapper = shallow( <Home/> )
        expect(wrapper.find('h1').html()).toBe('<h1>Bienvenido!!!</h1>')
    })

    test('display image correctly', () => {
        const wrapper = shallow( <Home/> )
        expect(wrapper.find('svg')).toBeTruthy()
    })
})

