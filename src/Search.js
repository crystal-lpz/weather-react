import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ca32155fa8562e7d4743f24dd7e13dc9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchBar = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="container">
        {searchBar}

        <div className="row">
          <div className="col-4">
            <span>
              <h2>{weather.name}</h2>
              <h3>{weather.description}</h3>
            </span>
          </div>
          <div className="col-4">
            <img
              src={weather.icon}
              alt={weather.description}
              className="icon"
            />
          </div>
          <div className="col temp ">
            {Math.round(weather.temperature)} <span>°C</span>
          </div>
          <div className="col">
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/h</li>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        {searchBar}

        <div className="row">
          <div className="col-4">
            <span>
              <h2>New York</h2>
              <h3>Cloudy</h3>
            </span>
          </div>
          <div className="col-4">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="cloudy rain"
              className="icon"
            ></img>
          </div>
          <div className="col temp"> 20°C</div>
          <div className="col">
            <li>Humidity: 10%</li>
            <li>Wind: 2km/h</li>
          </div>
        </div>
      </div>
    );
  }
}
