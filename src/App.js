import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import WeatherDetails from "./components/WeatherDetails.js";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, weather, onUpdateWeather, error } = this.props;
    console.log('weather: ', weather)

    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">
            Welcome to Dog Saga
          </h1>
        </header>

        <WeatherDetails 
          fetching={fetching}
          weather={weather}
          error={error}
        />

        {weather ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onUpdateWeather}>Update Weather</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

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