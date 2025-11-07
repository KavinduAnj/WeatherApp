import React, { useState } from 'react'

import SearchSection from './components/SearchSection'
import CurrentWeather from './components/CurrentWeather'
import HourlyWeatherItem from './components/HourlyWeatherItem'
import { weatherCodes } from './constants'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecasts, setHourlyForecasts] = useState([]);

  const filterHourlyForecast = (hourlyData) => {

    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;

    const next24HoursData = hourlyData.filter(({time}) => {
    const forecastTime = new Date(time).getTime();
    return forecastTime >= currentHour && forecastTime <= next24Hours;
    });
    setHourlyForecasts(next24HoursData);
  };
  const getWeatherDetails = async (API_URL) => {
   try{
    const response = await fetch(API_URL);
    const data = await response.json();
     //temperature
    const temperature = Math.floor(data.current.temp_c);
     //text
    const description = data.current.condition.text;
     //weather-icon
    const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code));

    setCurrentWeather({temperature, description, weatherIcon });
    //hourly data from two days
    const combinedHourlyData = [...data.forecast.forecastday[0].hour,...data.forecast.forecastday[1].hour];
    filterHourlyForecast(combinedHourlyData);
   } catch(error){
    console.log(error); 
   }
  };
  return (
    <div className='container'>

      {/* Search Section */}
      <SearchSection getWeatherDetails={getWeatherDetails} />

      {/* Weather Section */}
      <div className="weather-section">
        <CurrentWeather currentWeather={currentWeather}/>

        {/* Hourly Forecast Section */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            {hourlyForecasts.map((hourlyWeather) => (
            <HourlyWeatherItem key={hourlyWeather.time_epoch} hourlyWeather = {hourlyWeather} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
