import React from 'react'
import { Element}  from '../../components/Element'
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect' 
import Enzyme ,{ mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { IconElement } from "../../components/styled-components/ElementStyles" ;
import { TestExampleDataStore } from "../_helpers/testHelpers" ;
Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
describe('actions', () => {
let store;
let component;

beforeEach(() => {
    store = mockStore(TestExampleDataStore)
    const element = { first :'Mauro', last:'last', email:'email@email.com', phone:'123456', picture: {large: 'https://randomuser.me/api/portraits/men/83.jpg'},
    location:{ city: 'Mar del plata', state: 'Buenos Aires'} }

    store.dispatch = jest.fn();

    // I try to use react-test-renderer for simple testing 
    component = renderer.create(
        <Provider store={store}>
        <Element first={element.first}
        last={element.last}
        email={element.email}
        phone={element.phone}
        picture={element.picture}
        location={element.location} />
        </Provider>
    );
});
    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should show the inputs to edit on edit button click', () => {
        renderer.act(() => {
            component.root.findByProps({'data-testid': "edit"}).props.onClick();
        });        
        expect(component.root.findByProps({'data-testid': "cancel-edit"}).props).toBeTruthy();
        
    });
    it('should show the cards', () => {
        expect(component.root.findByProps({'data-testid': "edit"}).props).toBeTruthy();
    });
    it('should test button submit is present', () => {
        const element = { first :'Mauro', last:'last', email:'email@email.com', phone:'123456', picture: {large: 'https://randomuser.me/api/portraits/men/83.jpg'},
        location:{ city: 'Mar del plata', state: 'Buenos Aires'} };
        // I use Enzyme here 
        const elementComponent = mount(
            <Provider store={store}>
                <Element 
                first={element.first}
                last={element.last}
                email={element.email}
                phone={element.phone}
                picture={element.picture}
                location={element.location}/>
            </Provider>);
        elementComponent.find(IconElement).simulate('click');
        expect(elementComponent.find('.form-submit').length).toBe(1);
        expect(store).toBeTruthy();
        expect(elementComponent).toMatchSnapshot();
    });
})