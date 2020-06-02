import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer.js';

export default combineReducers({
    app: weatherReducer
})