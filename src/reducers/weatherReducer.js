import {
  GET_LOCATION,
  GET_CURRENT_CITY_FORECAST,
  CHANGE_CITY,
  GET_HOURLY
} from "../actions/types";

const initialState = {
  currentCity: "Tbilisi",
  key: 171705,
  forecast: [],
  hourlyForecast: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        currentCity: action.payload.name,
        key: action.payload.key
      };
    case GET_CURRENT_CITY_FORECAST:
      return {
        ...state,
        forecast: action.payload
      };
    case CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload.name,
        key: action.payload.key
      };
    case GET_HOURLY:
      return {
        ...state,
        hourlyForecast: action.payload.forecast
      };
    default:
      return { ...state };
  }
}
