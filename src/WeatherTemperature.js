import React, { useState } from "react";

export default function WeatherTmperture(props) {
  const [unit, setUnit] = useState(`celsius`);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function Fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="temperature">
        {Math.round(props.celsius)}°C|
        <a href="/" onClick={showFahrenheit}>
          {" "}
          F°
        </a>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        {Math.round(Fahrenheit())}{" "}
        <a href="/" onClick={showCelsius}>
          °C |
        </a>{" "}
        F°
      </div>
    );
  }
}
