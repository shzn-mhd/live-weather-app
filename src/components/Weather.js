import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Badulla,lk&units=metric&appid=d668ea70722cdd25935d036d00aa597f`
        );
        setWeatherData(response.data.list.slice(0, 5)); // Get the first 5 forecasts
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather">
      <h2>5-Day Weather Forecast for Badulla</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="weather-grid">
          {weatherData.map((day, index) => (
            <div key={index} className="weather-card">
              <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
              <p>Temp: {day.main.temp}°C</p>
              <p>{day.weather[0].description}</p>
              <p>Humidity: {day.main.humidity}%</p>
              <p>Wind Speed: {day.wind.speed} m/s</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
