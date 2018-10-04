import React from 'react';
import {shallow} from 'enzyme'

import WeatherDetails from './WeatherDetails';

const testWeather = {
  name: 'London',
  weather: [
    {
      id: 1,
      description: 'cloudy'
    }
  ]  
}

describe('<WeatherDetails />', () => {
  it('renders component', () => {
    const wrapper = shallow(<WeatherDetails 
      fetching={false}
      weather={testWeather}
      error={null}
    />)
  
    expect(wrapper.find('.weather-details').length).toEqual(1)
    
    expect(wrapper.find('.heading').length).toEqual(1)
    expect(wrapper.find('.heading').text()).toContain('Weather for London')

    expect(wrapper.find('.weather-condition').length).toEqual(1)
    expect(wrapper.find('.weather-condition').text()).toContain('cloudy')
  });
});
