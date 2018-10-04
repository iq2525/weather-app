import React, { Component } from "react";
import './WeatherControlPanel.scss'
export default class WeatherControlPanel extends Component {
  render() {
    const { fetching, onUpdateWeather, error } = this.props;
    
    return (
      <div className="weather-control-panel">
        {fetching ? (
          <button className="update-button" disabled={true}>Fetching...</button>
        ) : (
          <button className="update-button" onClick={onUpdateWeather}>Update Weather</button>
        )}

        {error && 
          <div className="error-message">
            Error - something not working!
          </div>
        }
      </div>
    );
  }
}