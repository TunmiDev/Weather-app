import React from "react";
import WeatherIcon from "../WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

const WeatherForecast = (props) => {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "41b39faeco43443c5c35d963td510b86";
  const longitude = props.coordinates.longitude;
  const latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="weatherForecast-temperature">
            <span className="weatherForecast-temperature-max">19°</span>
            <span className="weatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
