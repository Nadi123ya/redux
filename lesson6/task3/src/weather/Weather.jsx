import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import * as weatherActions from "./weather.actions";
import { wheeatherDataselector } from './weather.selectors';
// import { getWeatherData } from "./weather.gateway";

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeatherData();
  }

  render() {
    if (!this.props.citiesData) {
      return null;
    }
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.citiesData.map((city) => (
            <li key={city.id} className="city">
              <span className="city__name">{city.name}</span>
              <span className="city__temperature">{city.temperature}</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

Weather.propTypes = {
    citiesData: propTypes.array,
    getWeatherData: propTypes.func,
};

const mapState = state => {
    return {
      citiesData: wheeatherDataselector(state),
    }
  }
  
  const mapDispatch = {
    getWeatherData: weatherActions.getWeatherData,
  
  };

export default connect(mapState, mapDispatch)(Weather);
