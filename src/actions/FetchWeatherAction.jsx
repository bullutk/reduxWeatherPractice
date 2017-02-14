import $ from 'jquery';

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=482c145ce8edf1d69ea5168f9d06460c" + "&zip="
const getWeather = 'getWeather';

export default function GetTheWeather(){
	return{
		type: getWeather,
		payload: []
	}
}
