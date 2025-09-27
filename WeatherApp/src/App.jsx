import React from 'react'
import SearchSection from './components/SearchSection'

const App = () => {
  return (
    <div className='container'>

      {/* Search Section */}
      <SearchSection />

      {/* Weather Section */}
      <div className="weather-section">
        <div className="current-weather">
          <img src="icons/clouds.svg" alt="weather-icon" className='weather-icon' />
          <h2 className="temperature">20 <span>°C</span></h2>
          <p className="description">Partly Cloudy</p>
        </div>

        {/* Hourly Forecast Section */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="weather-icon" className='weather-icon' />
              <p className="temp">20<span>°C</span></p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="weather-icon" className='weather-icon' />
              <p className="temp">20<span>°C</span></p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="weather-icon" className='weather-icon' />
              <p className="temp">20<span>°C</span></p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="weather-icon" className='weather-icon' />
              <p className="temp">20<span>°C</span></p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="weather-icon" className='weather-icon' />
              <p className="temp">20<span>°C</span></p>
            </li>
             <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" alt="weather-icon" className='weather-icon' />
              <p className="temp">20<span>°C</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
