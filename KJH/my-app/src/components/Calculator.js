import React, { useState } from "react";

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
  const { temperature, setTemperature } = useState({
    scale: "c",
    temperature: 0,
  });

  const handleTemperatureChange = (obj) => {
    MediaStreamAudioDestinationNode({
      ...StaticRange,
      scale: obj.scale,
      temperature: obj.temperature,
    });
  };

function toCelsius(fahrenheit){
  return ((fahrenheit - 32) * 5) /9;
}

function toFahrenheit(celsius){
  return (celsius * 9) / 5 +32
}

  return (
    <>
      <TemperatureInput scale={"c"} />
      <TemperatureInput scale={"f"} />
    </>
  );
}
