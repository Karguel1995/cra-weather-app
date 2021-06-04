import React from 'react';
import './Result.css'

const Result = props => {
    const {error, city, temp, date, sunrise, sunset, pressure, wind} = props.weather

    let content = null

    if (!error && city) {

        const sunriseTime = new Date (sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
        <div className="container">
          <div className="widget">
            <div className="details">
                <div className="city">Weather for: {city}</div>
                <div className="temperature">{temp}&#176;C</div>
                <div className="summary">
                    <p className="summaryText">Date and time: {date}</p>
                    <p className="sunsetAndSunrise">
                      Sunrise at: {sunriseTime}<br/>
                      Sunset at: {sunsetTime}
                    </p>
                </div>
                <div className="precipitation">Pressure: {pressure} hPa</div>
                <div className="wind">Wind speed: {wind} m/s</div>
            </div>
        </div>
                {/* <h3>Weather for: <em>{city}</em></h3>
                <h4>Date and time: {date}</h4>
                <h4>Temperature: {temp}&#176;C</h4>
                <h4>Sunrise: {sunriseTime}</h4>
                <h4>Sunset: {sunsetTime}</h4>
                <h4>Pressure: {pressure}hPa</h4>
                <h4>Wind speed: {wind}m/s</h4> */}
      </div>


        )
    }

    return ( 
        <div className="result">
            {error ? <p className="error">There is no {city} in our base!</p> : content}
        </div>
     );
}
 
export default Result;