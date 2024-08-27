import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError('City not found or error fetching data');
    }
  };

  const handleClick = () => {
    if (city) {
      fetchWeatherData();
    }
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleClick}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div id="weather">
          <div id="city">{weather.name}, {weather.sys.country}</div>
          <div id="temp">{Math.round(weather.main.temp)}°C</div>
          <div id="description">{weather.weather[0].description}</div>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;

