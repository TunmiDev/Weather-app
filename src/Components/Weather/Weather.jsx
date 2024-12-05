import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "../Weatherinfo/WeatherInfo";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

const Weather = (props) => {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log("API Response:", response.data);
    setweatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    const apiKey = "41b39faeco43443c5c35d963td510b86";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.log("Error fetching weather data:", error);
        alert(
          "Could not fetch weather data. Please check the city name or try again later."
        );
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search(); //Fetches data for default city
    return "Loading...";
  }
};

export default Weather;
