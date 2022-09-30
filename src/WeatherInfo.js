import React from "react";
import WeatherTemperature from "./WeatherTemperature";
// import WeatherIcon from "./weatherIcons";
export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo ">
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex">
            <div className="col-4">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="icon"
              />

              {/* <WeatherIcon code={props.data.icon} size={60} /> */}
            </div>

            <div className="col-4">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>

            <div className="col-4">
              <ul>
                <li>Humidity:{props.data.humidity}%</li>
                <li>Wind:{Math.round(props.data.wind)}km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <h2>{props.data.name}</h2>
            <h3>{props.data.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
