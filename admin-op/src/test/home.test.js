import React from "react";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });


describe('group test', ()=>{

    test('first test', ()=>{
        expect(10).toBe(10)
    })

})

