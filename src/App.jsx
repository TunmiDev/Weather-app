import React from "react";
import Weather from "./Components/Weather/Weather";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity=" Lagos" />
        <footer>
          This project was coded by {""}
          <a href="https://github.com/TunmiDev" target="_blank">
            TunmiDev
          </a>
          {""} and is {""}
          <a href="https://github.com/TunmiDev/Weather-app" target="_blank">
            open-sourced on Github
          </a>{" "}
          and {""}
          {""}
          <a href="https://weather-62qg8ibaz-tunmidevs-projects.vercel.app/">
            hosted on Vercel.
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
