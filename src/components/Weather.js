import React, { useEffect, useState } from "react";

function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "2e6d2bd8058929cb884faf44725c47e2"; // Your API key
  const CITY = "Badulla,lk"; // Your city

  // Function to fetch weather data
  const fetchWeatherData = async () => {
    try {
      setLoading(true); // Set loading state
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      // Filter the data to get one forecast per day (e.g., at 12:00 PM)
      const filteredData = data.list.filter((forecast) =>
        forecast.dt_txt.includes("12:00:00")
      );

      setWeatherData(filteredData.slice(0, 5)); // Keep only the first 5 days
      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  // Effect to fetch data on mount and set up auto-refresh
  useEffect(() => {
    fetchWeatherData();

    // Auto-refresh every hour
    const interval = setInterval(fetchWeatherData, 3600000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
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
}

export default Weather;
