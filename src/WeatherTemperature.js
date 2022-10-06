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
        {Math.round(props.celsius)}
        <span>
          °C |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        {Math.round(Fahrenheit())}
        <span>
          <a href="/" onClick={showCelsius}>
            °C |
          </a>{" "}
          °F
        </span>
      </div>
    );
  }
}
