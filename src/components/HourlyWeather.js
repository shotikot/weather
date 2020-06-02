import React from "react";
import "./styles/HourlyWeather.css";

const HourlyWeather = props => {
  let hours = props.date.getHours();
  const images = require.context("../icons", true);
  let img = images(`./${props.icon}.png`);
  return (
    <div className="hourlyWeather">
      <span className="time">{hours}:00</span>
      <img src={img} alt="weather"/>
      <span className="temp">{props.temp}°</span>
    </div>
  );
};

export default HourlyWeather;
