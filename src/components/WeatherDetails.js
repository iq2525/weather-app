import React, { Component } from "react";

export default class WeatherDetails extends Component {
  
  renderWeatherDetails = (weather) => {
    if (!weather){
      return null
    }
    
    console.log('1')
    const { name: cityName, main, weather: weatherConditions } = weather
    console.log('2')
    console.log('cityName: ', cityName)

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
