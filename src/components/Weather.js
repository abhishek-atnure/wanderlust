import React, { Fragment } from 'react'

export default function Weather({ weather }) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);
    return (

        <Fragment>
            <div className="sectiontitle">
                <h2>CURRENT WEATHER</h2>
            </div>
            <section id="weather">

                {Object.keys(weather).length !== 0 ? <div className="weather" id="weather1">

                    <h2>{weekDays[(new Date()).getDay()]}</h2>
                    <h2>Temperature: {weather.main.temp ? kelvinToFahrenheit(weather.main.temp) : "Not avilable"}&deg;F</h2>
                    <h2>Condition: {weather.weather[0].description}</h2>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                </div>
                    : null}
            </section>
        </Fragment>
    )
}
