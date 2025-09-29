import React, { useState } from 'react'

import SearchSection from './components/SearchSection'
import CurrentWeather from './components/CurrentWeather'
import HourlyWeatherItem from './components/HourlyWeatherItem'
import { weatherCodes } from './constants'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
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
    console.log(data);
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
            <HourlyWeatherItem />
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
