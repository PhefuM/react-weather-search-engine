import React from "react";

export default function Weather() {
    return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    />
                    </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary"/>
                        </div>
                      </div>
                    </form>
                    <br />
                    <h1>New York</h1>
                    <ul>
                        <li>Wednesday 07:00</li>
                        <li>Mostly cloudy</li>
                    </ul>

                    <div className="row">
                        <div className="col-6">
                            <img src="https://gstatic.com/onebox/weather/64/partly_cloudy.png"
                            alt="Mostly cloudy"
                            />
                            <span>6°C</span>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Precipitation</li>
                                    <li>Humidity:72%</li>
                                    <li>Wind: 13km/h</li>
                                </ul>
                            </div>
                          </div>
                        </div>
                        ); 
}