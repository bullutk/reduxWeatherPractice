// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ********************ROOT REDUCER*****************
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 1. combineReducer method
// 2. pass it an Object3.each key will be a piece of the app state
// 3

import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
import MovieReducer from './MovieReducer';


const rootReducer = combineReducers({
	weather: WeatherReducer,
	movie: MovieReducer
})

export default rootReducer;