// components/Weather.jsx
import { useState } from 'react';
import Search from './Search';

export default function Weather() {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchWeatherData() {
    setLoading(true);
    setError('');
    try {
      const apiKey = '17ab300d9a0ab1e88d24aab5160fb8ad';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    if (search.trim() === '') {
      setError('Please enter a city name');
      return;
    }
    fetchWeatherData();
  }

  return (
    <div className="weather-container">
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />

      {loading && <p className="loading">Loading weather data...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>🌡 Temperature: {weatherData.main.temp} °C</p>
          <p>💧 Humidity: {weatherData.main.humidity} %</p>
          <p>💨 Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>🌥 Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
