//도시 버튼 UI
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, selectedCity }) => {
  return (
    <div className="weatherButton-box">
      <Button
        variant={selectedCity === "" ? "outline-warning" : "warning"}
        onClick={() => {
          setCity("");
        }}
      >
        Currnet Location
      </Button>
      {/*현재 위치*/}
      {/*도시 항목이 저장된 배열 정보를 이용해 여러 개의 버튼 만들기*/}
      {cities.map((item) => (
        <Button
          variant={selectedCity === item ? "outline-warning" : "warning"}
          onClick={(e) => {
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
