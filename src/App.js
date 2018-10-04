import React, { Component } from "react";
import "./App.scss";
import WeatherDetails from "./components/WeatherDetails.js";
import WeatherControlPanel from "./components/WeatherControlPanel.js";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, weather, onUpdateWeather, error } = this.props;
    
    return (
      <div className="App">
        <header className="header">
          
          <h1 className="title">
            Welcome to the Weather App
          </h1>
        </header>

        <WeatherDetails 
          fetching={fetching}
          weather={weather}
          error={error}
        />

        <WeatherControlPanel
          fetching={fetching}
          onUpdateWeather={onUpdateWeather}
          error={error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    weather: state.weather,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateWeather: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);