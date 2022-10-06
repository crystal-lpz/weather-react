import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import Time from "./TimeStamp";
import "./WeatherInfo.css";

import WeatherIcons from "./weatherIcons";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo ">
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-4">
            <WeatherIcons className="Icon" icon={props.data.icon} size={60} />
          </div>

          <div className="col-4 ">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>

          <div className="col-4 ">
            <ul>
              <li>Humidity:{props.data.humidity}%</li>
              <li>Wind:{Math.round(props.data.wind)}km/h</li>
              <li>
                H:{Math.round(props.data.max)} L:{Math.round(props.data.min)}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 CityInfo">
          <h2>{props.data.name}</h2>
          <div className="time">
            <Time date={props.data.date} />
          </div>
          <h3>{props.data.description}</h3>
        </div>
      </div>
    </div>
  );
}
