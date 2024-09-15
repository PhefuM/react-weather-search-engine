import React from 'react';
import Weather from "./Weather"
import './App.css';

export default function App() {
  return <div className="App">
    <h1>Weather App</h1>
    <Weather defaultCity= "New York"/>
    <footer>
      This project was coded by Phefumlela Madyo and is {""}
        <a href="https://github.com/PhefuM/react-weather-search-engine" target="_blank" rel="noreferrer">
        open-sourced on GitHub{""}
        </a>
       {""} and is {""}
        <a href="https://luminous-licorice-97f0db.netlify.app/" target="_blank" rel="noreferrer">
        hosted on Netlify
        </a>
    </footer>
  </div>

}
