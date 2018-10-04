# Weather App

## Used Create-React-App as boilerplate
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Software Requirements
Has been tested with the following setup:
* Node 8
* Chrome browser v69

## Install App
Clone the repository and enter the directory:
```
git clone git@github.com:iq2525/weather-app.git
cd weather-app
``` 

Install dependencies:
```
npm install
```

## Run App
```
npm start
```

In your browser, go to: http://localhost:3000/

Click the button 'Update Weather' to get the latest weather data for London.

## Run tests
I believe that Unit tests are vital when making any code.

```
npm test
```

## Data Endpoint

The app uses the following endpoint:
http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=APP_ID

## Redux & Redux Saga

This App uses Redux & Redux Saga to trigger a call to the Endpoint.

I used Redux so that all the state and actions are stored in one place.  This makes the app easier to manage and extend.

Redux Saga allows you to write your Async calls in a clean way using ES5 generators.  This seemed to be ideal for this project.

## Redux Saga Testing issues

I couldn't get the unit testing working for the Redux Saga part of the app.

A possible fix would be to look at something like:
* Redux Saga Test Plan - https://github.com/jfairbank/redux-saga-test-plan

## Unit testing with Jest & Enzyme

All tests are located next to the source file so they are easy to import.

## High Order Components & Presentational Components

The main component is the 'App.js' component.  All the Redux setup is done is this file.

This then allowed me to create 2 simple presentational Components - WeatherDetails & WeatherControlPanel.

This is a common pattern with React and makes it easier to manage code.

## CSS Modules

Each component has its own CSS file which means that I can use nice simple names for the CSS classes.


## SCSS

I also setup SCSS which I like as it means I can useful features like variables.

## Issues / Difficulties

### Main difficulty is the testing of Redux Saga

One of Redux Saga's main advantages is that it is meant to be easy to test.  However, I had issues with this and spent a lot of time trying to get it working.

In the end I was not able to get it working.  I will need more time to investigate this.

### CORS

The sample api endpoint from Open Weather does not have CORS.  

I realised afterwards that I need to sign up for an account.  Which gave me access to an endpoint that does have CORS.

## Future Improvements

* Have a hosted version running
* Get the Redux Saga tests working
* Improve test coverage.
* Display more Weather data
* Allow the user to get weather for different countries and cities
* Make the API endpoint and API App ID configurable
* Make the App responsive
* Add React storybook
