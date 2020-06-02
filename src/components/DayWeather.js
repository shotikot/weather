import React from "react";
import "./styles/DayWeather.css";

let weekDays = [
  "კვირა",
  "ორშაბათი",
  "სამშაბათი",
  "ოთხშაბათი",
  "ხუთშაბათი",
  "პარასკევი",
  "შაბათი"
];
let months = [
  "იანვარი",
  "თებერვალი",
  "მარტი",
  "აპრილი",
  "მაისი",
  "ივნისი",
  "ივლისი",
  "აგვისტო",
  "სექტემბერი",
  "ოქტომბერი",
  "ნოემბერი",
  "დეკემბერი"
];

const DayWeather = props => {
  const images = require.context("../icons", true);
  let img = images(`./${props.icon}.png`);
  let date = new Date(props.epochDate * 1000);
  let day = weekDays[date.getDay()];
  let num = date.getDate();
  let month = months[date.getMonth()];
  return (
    <div className={`dayWeatherContainer`} title={props.titlePhrase}>
      <p>{num + " " + month}</p>
      <p>{day}</p>
      <img src={img} alt='weather'/>
      <h4>
        <span>{props.minC + "° "}</span>
        <span>{props.maxC + "°"}</span>
      </h4>
    </div>
  );
};

export default DayWeather;
