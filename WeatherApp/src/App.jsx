import React from 'react'

const App = () => {
  return (
    <div className='container'>

      {/* Search Section */}
      <div className='search-section'>
        <form action="#" className='search-form'>
          <span className="material-symbols-rounded">
            search
          </span>
          <input type="search" placeholder='Enter city name' className='search-input' required />
        </form>
        <button className="location-button">
          <span className="material-symbols-rounded">my_location</span>
        </button>
      </div>

      {/* Weather Section */}
      <div className="weather-section">
        <div className="current-weather">
          <img src="icons/clouds.svg" alt="weather-icon" className='weather-icon' />
          <h2 className="temperature">20 <span>°C</span></h2>
          <p className="description">Partly Cloudy</p>
        </div>
        <div className="hourly-forcast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
