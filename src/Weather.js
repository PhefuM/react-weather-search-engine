import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
 const [weatherData, setWeatherData] = useState({ready:false})
 function handleResponse(response){
  console.log(response);
  setWeatherData({
   ready: true,
   temperature: response.data.temperature.current,
   date: new Date(response.data.date * 1000),
   description: response.data.condition.description,
   icon_url: response.data.condition.icon_url,
   humidity: response.data.temperature.humidity,
   wind: response.data.wind.speed,
   city: response.data.name,
  });
 }
 

 function handleSubmit(event){
  event.preventDefault();
 }

 function searchCity(city) {
  const apiKey= "4o05t4b450f7bf3040828beac3b1db1c";
  let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);
 }
 

 if (weatherData.ready) {
    return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    autoFocus="on"
                    />
                    </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100"/>
                        </div>
                      </div>
                    </form>
                    <br />
                    <h1>{weatherData.city}</h1>
                    <ul>
                        <li>
                          <FormattedDate date={weatherData.date} />
                        </li>
                        <li  className="text-capitalization">
                         {weatherData.description}
                        </li>
                    </ul>

                    <div className="row mt-3">
                        <div className="col-6">
                         
                            <img src= {weatherData.icon_url}
                            alt= {weatherData.description}
                           
                            />
                            
                            
                            <span className="temperature">
                             {Math.round(weatherData.temperature)}
                            </span>
                            <span className="units">°C</span>
                           
                            
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Humidity:{weatherData.humidity} %</li>
                                    <li>Wind: {weatherData.wind} 13km/h</li>
                                </ul>
                            </div>
                          </div>
                        </div>
                      
                        ); 
                       } else{
                        searchCity(props.defaultCity);
                        
                        return "Loading..";
                       }
                      
                      
}
