import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div class="col">
                  <div className="WeatherForecast-day">Thurs</div>
                  
                  <div className="WeatherForecast-temperature">
                  <span className="WeatherForecast-temperature-max">19°C</span>
                  {""} | {""}
                  <span className="WeatherForecast-temperature-min">10°C</span>  

                </div>
            </div>
        </div>
        </div>
    )
}