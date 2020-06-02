import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getLocation,
  getCurForecast,
  getHourly,
} from "../actions/weatherActions";
import DayWeather from "./DayWeather";
import ChangeCity from "./ChangeCity";
import HourlyWeather from "./HourlyWeather";
import "./styles/CurrentCity.css";

const CurrentCity = ({
  getLocation,
  locationKey,
  getCurForecast,
  forecast,
  getHourly,
  currentCity,
  hourlyForecast,
}) => {
  useEffect(() => {
    getLocation();
  }, [getLocation]);
  useEffect(() => {
    if (locationKey !== "") {
      getCurForecast(locationKey);
      getHourly(locationKey);
    }
  }, [locationKey, getHourly, getCurForecast]);
  let forecasts = forecast;
  let forecastsMap = forecasts.map((item, index) => {
    let minF = item.Temperature.Minimum.Value;
    let minC = (5 / 9) * (minF - 32);
    let maxF = item.Temperature.Maximum.Value;
    let maxC = (5 / 9) * (maxF - 32);
    let icon = item.Day.Icon;
    maxC = Math.round(maxC);
    minC = Math.round(minC);
    return (
      <DayWeather
        date={item.Date}
        key={index}
        epochDate={item.EpochDate}
        minC={minC}
        maxC={maxC}
        icon={icon}
      />
    );
  });
  let hourly = hourlyForecast.map((item, index) => {
    let date = new Date(item.EpochDateTime * 1000);
    let f = item.Temperature.Value;
    let c = Math.round((5 / 9) * (f - 32));
    return (
      <HourlyWeather
        key={index}
        date={date}
        temp={c}
        titlePhrase={item.IconPhrase}
        icon={item.WeatherIcon}
      />
    );
  });
  return (
    <div className="currentCity">
      <div id="overlay"></div>
      <ChangeCity />
      <h1 className="currentCityH1">{currentCity}</h1>
      <h1>Daily</h1>
      <div className="weathers">{forecastsMap}</div>
      <h1 className="hourly-h1">Hourly</h1>
      <div className="hourly">{hourly}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentCity: state.app.currentCity,
  locationKey: state.app.key,
  forecast: state.app.forecast,
  hourlyForecast: state.app.hourlyForecast,
});

export default connect(mapStateToProps, {
  getLocation,
  getCurForecast,
  getHourly,
})(CurrentCity);
