import axios from 'axios';

const API_KEY = 'ENTER_YOUR_API_KEY_THAT_YOU_RECEIVED_AFTER_SIGNING_UP';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},CA&units=metric`;
  const request = axios.get(url);


  return {
  	type: FETCH_WEATHER,
  	payload: request
  };
}