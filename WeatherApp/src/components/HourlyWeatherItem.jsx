import React from 'react'
import { weatherCodes } from '../constants'

const HourlyWeatherItem = ({ hourlyWeather }) => {
  if (!hourlyWeather || !hourlyWeather.condition) {
    return null; // Skip if data missing
  }

  const temperature = Math.floor(hourlyWeather.temp_c);

  // Format: "Nov 7, 1 PM"
  const date = new Date(hourlyWeather.time);
  const formattedDate = date.toLocaleString('en-US', {
    month: 'short',   // e.g. Nov
    day: 'numeric',   // e.g. 7
    hour: 'numeric',  // e.g. 1
    hour12: true      // 12-hour format with AM/PM
  });

  const weatherIcon = Object.keys(weatherCodes).find(
    icon => weatherCodes[icon].includes(hourlyWeather.condition.code)
  );

  return (
    <li className="weather-item">
      <p className="time">{formattedDate}</p>
      {weatherIcon && (
        <img
          src={`icons/${weatherIcon}.svg`}
          alt="weather-icon"
          className="weather-icon"
        />
      )}
      <p className="temperature">{temperature}°</p>
    </li>
  );
};

export default HourlyWeatherItem;
