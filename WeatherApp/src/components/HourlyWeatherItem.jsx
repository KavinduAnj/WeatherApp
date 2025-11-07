import React from 'react'
import { weatherCodes } from '../constants'

const HourlyWeatherItem = ({ hourlyWeather }) => {
  if (!hourlyWeather || !hourlyWeather.condition) {
    return null;
  }

  const temperature = Math.floor(hourlyWeather.temp_c);
  const time = hourlyWeather.time;
  const weatherIcon = Object.keys(weatherCodes).find(
    icon => weatherCodes[icon].includes(hourlyWeather.condition.code)
  );

  return (
    <li className="weather-item">
      <p className="time">{time}</p>
      {weatherIcon && (
        <img
          src={`icons/${weatherIcon}.svg`}
          alt="weather-icon"
          className="weather-icon"
        />
      )}
      <p className="temperature">{temperature}°</p>
    </li>
  )
}

export default HourlyWeatherItem;
