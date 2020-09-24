import React, {useState} from 'react';
import './css files/App.css';
import Home from './components/Home'

const weatherApi = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: process.env.REACT_APP_WEATHER_API_BASE
}

function App() {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState("")

  const search = (e) => {
      e.preventDefault()
      fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        setQuery("");
      })
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? "App-warm" : "App") : "App"}> 
      <form className="input-box" onSubmit={(e) => search(e)}>
        <input 
          className="input"
          type="text" 
          placeholder="Search..." 
          onChange={e => setQuery(e.target.value)} 
          value={query}
          />
        <button type="submit" className="button">ENTER</button>
      </form>
        {(typeof weather.main != "undefined") ? (
          <div className="info-box">
            <div>
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{new Date().toDateString()}</div>
            </div>
            <div className="weather-box">
              <div className="weather">{weather.weather[0].description}</div>
              <div className="temp-box">
                <span className="temp">{Math.round(weather.main.temp)}°C</span>
              </div>
            </div>
          </div>
    ) : ( <Home /> )}
    </div>
    );
}

export default App;
