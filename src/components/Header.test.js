import React from 'react' 
import Enzyme, { shallow } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 
import Header from './Header'
import { render } from '@testing-library/react'
Enzyme.configure({ adapter: new Adapter() }) 

describe('When Header loads', () => {
    let renderedHeader;
    beforeEach(() => {
        //arrange
        renderedHeader = shallow(<Header/>);
    });

    it('displays hamburger icon and the menu is collapsed', () => {
        //act
        const hamburger = renderedHeader.find('NavbarToggler');
        const collapsedComponent = renderedHeader.find('Collapse')
    
        //assert
        expect(hamburger.length).toEqual(1);
        expect(collapsedComponent.props().isOpen).toEqual(false);
    })

    it('expands the menu when the icon is clicked', () => {
        // act
        const hamburger = renderedHeader.find('NavbarToggler');
        hamburger.simulate('click');

        // assert
        const collapsedComponent = renderedHeader.find('Collapse');
        expect(collapsedComponent.props().isOpen).toEqual(true);

    })
})