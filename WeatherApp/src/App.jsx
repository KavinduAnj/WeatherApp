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
          <img src="" alt="weather-icon" className='weather-icon' />
        </div>
      </div>
    </div>
  )
}

export default App
