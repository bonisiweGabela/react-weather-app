import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Durban" />
        <footer>
          {" "}
          This project was coded by Bonisiwe Gabela and is {""}
          <a
            href="https://github.com/bonisiweGabela/react-weather-app"
            target="_blank"
            rel="nonopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>{" "}
      </div>
    </div>
  );
}
