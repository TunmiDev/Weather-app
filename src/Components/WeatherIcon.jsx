import React from "react";

const WeatherIcon = (props) => {
  return (
    <img
      src={props.code} // Directly use the full icon URL passed in as props
      alt="weather icon"
      style={{ width: props.size, height: props.size }} // Optional styling for size
    />
  );
};

export default WeatherIcon;
