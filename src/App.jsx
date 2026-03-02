import { useState, useEffect } from 'react'
import './App.css'

function WeatherApp() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // clear error and previous weather when user types a new city
  useEffect(() => {
    if (city) {
      setError('')
      setWeather(null)
    }
  }, [city])

  const handleSearch = async () => {
    if (!city) return
    setLoading(true)
    setError('')
    setWeather(null)
    try {
      const key = '6de85df6f3d7f32721d20c37857c993c'
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${key}&units=metric`
      )
      if (!res.ok) {
        const errorData = await res.json().catch(() => null)
        const message =
          (errorData && errorData.message) ||
          (res.status === 404 ? 'City not found' : 'Unable to fetch weather data')
        throw new Error(message)
      }
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <div className="search-area">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="card weather-card">
          <h2>{weather.name}</h2>
          <p>Temp: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].main}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default WeatherApp
