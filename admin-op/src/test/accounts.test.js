import React from "react";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import Accounts from '../pages/Accounts'

configure({ adapter: new Adapter() });

describe('<Accounts/>', () => {
    test('Receive accounts from api', () => {
    
    })

    test('Print Card', () => {
        const wrapper =  shallow( <Accounts/> )
        expect(wrapper.find('.simple-card')).toBeTruthy()
    })

    test('Delete account with button', () => {
        const deleteButton = jest.fn()
        const wrapper =  shallow( <Accounts/> )
        console.log(wrapper)
    })
})