import React from 'react'

const HourlyWeatherItem = () => {
  return (
    <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="weather-icon" className='weather-icon' />
              <p className="temp">20<span>°C</span></p>
            </li>
  )
}

export default HourlyWeatherItem
