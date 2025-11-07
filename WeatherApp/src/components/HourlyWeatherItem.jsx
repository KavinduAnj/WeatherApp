import React from 'react'
import { weatherCodes } from '../constants'

const HourlyWeatherItem = ({ hourlyWeather }) => {
  if (!hourlyWeather || !hourlyWeather.condition) {
    return null; // Skip if data missing
  }

  const temperature = Math.floor(hourlyWeather.temp_c);

  // Extract and format date + time
  const dateObj = new Date(hourlyWeather.time);
  const monthDate = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
  const time = dateObj.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const weatherIcon = Object.keys(weatherCodes).find(
    icon => weatherCodes[icon].includes(hourlyWeather.condition.code)
  );

  return (
    <li className="weather-item">
      <p className="time">
        {monthDate}
        <br /> {/* 🆕 Break line for time */}
        {time}
      </p>
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
