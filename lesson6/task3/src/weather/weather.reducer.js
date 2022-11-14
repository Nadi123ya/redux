import { WEATHER_DATA } from "./weather.actions";

const initalState = {
  cities: [],
};

export const weatherReducer = (state = initalState, action) => {
  switch (action.type) {
    case WEATHER_DATA:
      return action.payload.weatherData;
    default:
      return state;
  }
};
