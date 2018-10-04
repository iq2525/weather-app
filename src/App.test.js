import React from 'react';
import App from './App';
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'

describe('<App />', () => {
  it('renders without crashing', () => {
    const mockStore = configureStore()
    const store = mockStore()
    const container = shallow(<App store={store} /> )  
    
    expect(container.html()).toContain('weather-details')
    expect(container.html()).toContain('weather-control-panel')
  });
});