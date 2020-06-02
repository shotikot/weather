import {
  GET_LOCATION,
  GET_CURRENT_CITY_FORECAST,
  CHANGE_CITY,
  GET_HOURLY
} from "./types";

export const getLocation = () => dispatch => {
  const declare = position => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=fB40fnXIHKyL5EH90VyfZ8YbIQeHtv61&q=${lat}%2C${lon}`
    )
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_LOCATION,
          payload: {
            key: json.Key,
            name: json.LocalizedName
          }
        });
      });
  };
  navigator.geolocation.getCurrentPosition(declare);
};

export const getCurForecast = cityKey => dispatch => {
  let key = cityKey;
  fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=fB40fnXIHKyL5EH90VyfZ8YbIQeHtv61`
  )
    .then(response => response.json())
    .then(json => {
      let info = json.DailyForecasts;
      dispatch({
        type: GET_CURRENT_CITY_FORECAST,
        payload: info
      });
    });
};

export const changeCity = name => dispatch => {
  fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=fB40fnXIHKyL5EH90VyfZ8YbIQeHtv61&q=${name}`
  )
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: CHANGE_CITY,
        payload: {
          key: json[0].Key,
          name: json[0].LocalizedName
        }
      });
    });
};

export const getHourly = key => dispatch => {
  fetch(
    `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=fB40fnXIHKyL5EH90VyfZ8YbIQeHtv61`
  )
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: GET_HOURLY,
        payload: {
          forecast: json
        }
      });
    });
};
