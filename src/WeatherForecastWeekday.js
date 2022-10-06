import React from "react";
import WeatherIcons from "./weatherIcons";
import "./WeatherForecast.css";
export default function WeatherForecastWeekday(props) {
  function MaxTemp() {
    let temperture = Math.round(props.data.temp.max);
    return `${temperture}`;
  }
  function MinTemp() {
    let temperture = Math.round(props.data.temp.min);
    return `${temperture}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="Weather-Forecast-weekday">{day()}</div>
      <div>
        <WeatherIcons icon={props.data.weather[0].icon} size={30} />
      </div>
      <div>
        <span className="WeatherForecast-max">{MaxTemp()}°</span>{" "}
        <span className="WeatherForecast-min">{MinTemp()}°</span>
      </div>
    </div>
  );
}
