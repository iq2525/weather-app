import React from 'react';
import {shallow} from 'enzyme'

import WeatherControlPanel from './WeatherControlPanel';

describe('<WeatherDetails />', () => {
  it('renders component in success state', () => {
    const wrapper = shallow(<WeatherControlPanel 
      fetching={false}
      onUpdateWeather={null}
      error={null}
    />)
  
    expect(wrapper.find('.update-button').length).toEqual(1)
    expect(wrapper.find('.update-button').text()).toEqual('Update Weather')
  });

  it('renders in fetching data state', () => {
    const wrapper = shallow(<WeatherControlPanel 
      fetching={true}
      onUpdateWeather={null}
      error={null}
    />)
  
    expect(wrapper.find('.update-button').length).toEqual(1)
    expect(wrapper.find('.update-button').text()).toContain('Fetching...')
  });

  it('renders in error state', () => {
    const wrapper = shallow(<WeatherControlPanel 
      fetching={false}
      onUpdateWeather={null}
      error={true}
    />)
  
    expect(wrapper.find('.error-message').length).toEqual(1)
  });

  it('calls the onUpdateWeather dispatch method when the button is clicked', () => {
    const mockFn = jest.fn();
    
    const wrapper = shallow(<WeatherControlPanel 
      fetching={false}
      onUpdateWeather={mockFn}
      error={false}
    />)
  
    const updateButton = wrapper.find('.update-button')
    expect(updateButton.length).toEqual(1)

    updateButton.simulate('click')
    expect(mockFn.mock.calls.length).toEqual(1)
  });
});
