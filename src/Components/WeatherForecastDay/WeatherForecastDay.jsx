import React from "react";
import WeatherIcon from "../WeatherIcon";

const WeatherForecastDay = (props) => {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`; // Correct interpolation
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`; // Correct interpolation
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon_url} size={36} />
      <div className="weatherForecast-temperature">
        <span className="weatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
