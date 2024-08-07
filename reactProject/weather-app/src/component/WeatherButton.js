import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities }) => {
  return (
    <div className="weatherButton-box">
      <Button variant="warning">Currnet Location</Button>
      {cities.map((item) => (
        <Button variant="warning">{item}</Button>
      ))}
    </div>
  );
};

export default WeatherButton;
