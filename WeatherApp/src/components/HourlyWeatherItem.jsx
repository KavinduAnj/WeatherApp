import React from 'react'
import { weatherCodes } from '../constants'

const HourlyWeatherItem = ({hourlyWeather}) => {
  const temparature = Math.floor(hourlyWeather.temp_c);
  const time = hourlyWeather.time;
  const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(hourlyWeather.current.condition.code));
  return (
    <li className="weather-item">
              <p className="time">{time}</p>
              <img src={`icons/${weatherIcon}.svg`} alt="weather-icon" className='weather-icon' />
              <p className="temperature">{temparature}°</p>
            </li>
  )
}

export default HourlyWeatherItem
