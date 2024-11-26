import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const WeatherIcon = (props) => {
  console.log(props.code);

  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "SLEET",
    "10n": "SLEET",
    "11d": "SNOW",
    "11n": "SNOW",
    "13d": "WIND",
    "13n": "WIND",
    "15d": "FOG",
    "15n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={52}
      animate={true}
    />
  );
};

export default WeatherIcon;