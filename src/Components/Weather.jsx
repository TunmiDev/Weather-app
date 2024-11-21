import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src="" alt="" />
          6℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity : 72%</li>
            <li>Wind 13km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
