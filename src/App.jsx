import React from "react";
import Weather from "./Components/Weather";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity=" New York" />
        <footer>
          This project was coded by {""}
          <a href="" target="_blank">
            TunmiDev
          </a>
          {""} and is {""}
          <a href="" target="_blank">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
