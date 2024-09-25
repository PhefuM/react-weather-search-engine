import React from "react";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response){
        console.log(response.data)
    }

    console.log(props)


    let apiKey= "4o05t4b450f7bf3040828beac3b1db1c";
    let longitude= props.coordinates.longitude;
    let latitude= props.coordinates.latitude;
    let apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`

    

    axios.get(apiUrl).then(handleResponse)

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div class="col">
                  <div className="WeatherForecast-day">Thurs</div>
                  <div className="WeatherForecast-temperature">
                  <span className="WeatherForecast-temperature-max">19°</span>
                  {""} {""}
                  <span className="WeatherForecast-temperature-min">10°</span>  

                </div>
            </div>
        </div>
        </div>
    )
}