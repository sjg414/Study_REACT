//날씨정보 UI Box

import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weather-box">
      <div>
        <h1>{weather?.name}</h1>
      </div>
      {/*도시 이름*/}
      <h2>
        {/*섭씨, 화씨*/}
        {weather?.main.temp.toFixed(2)}°C /
        {(weather?.main.temp * 1.8 + 32).toFixed(2)}°F
      </h2>
      <h3>{weather?.weather[0].description}</h3> {/*날씨 묘사*/}
    </div>
  );
};

export default WeatherBox;
