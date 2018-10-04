import React, { Component } from "react";

export default class WeatherDetails extends Component {
  
  renderWeatherDetails = (weather) => {
    if (!weather){
      return (<div>Click the button to get weather data for London</div>)
    }
    
    const { name: cityName, main, weather: weatherConditions } = weather
    const weatherConditionsList = weatherConditions.map((weatherCondition) => {
      return (<div 
                className="weather-condition"
                key={weatherCondition.id}>
                  {weatherCondition.description}
              </div>)
    })

    return (
      <div>
        <h2 className="heading">Weather for {cityName}</h2>
        {weatherConditionsList}
      </div>
    )
  }

  
  render() {
    const { fetching, weather, error } = this.props;
    console.log('weather: ', weather)

    return (
      <div className="weather-details">
        {this.renderWeatherDetails(weather)}
      </div>
    );
  }
}
