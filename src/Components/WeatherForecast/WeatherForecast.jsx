import React from "react";
import WeatherIcon from "../WeatherIcon";
import "./WeatherForecast.css";

const WeatherForecast = () => {
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
