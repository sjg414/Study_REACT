//도시 버튼 UI
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className="weatherButton-box">
      <Button
        variant="warning"
        onClick={() => {
          setCity("");
        }}
      >
        Currnet Location
      </Button>{" "}
      {/*현재 위치*/}
      {/*도시 항목이 저장된 배열 정보를 이용해 여러 개의 버튼 만들기*/}
      {cities.map((item) => (
        <Button
          variant="warning"
          onClick={() => {
            setCity(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
