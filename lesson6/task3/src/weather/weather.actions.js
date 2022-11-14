//describe the component that:
//make a request for the list of cities
//put this list on the page
//getWeatherData

import { getCitiesData } from "./weather.gateway";

export const WEATHER_DATA = "WEATHER_DATA";

export const wetherRecived = (weatherData) => {
  return {
    type: WEATHER_DATA,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    getCitiesData().then((data) => {
      dispatch(wetherRecived(data));
    });
  };
};
