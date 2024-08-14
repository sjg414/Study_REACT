import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

/*
1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
2. 날씨 정보에는 도시, 온도(섭씨,화씨), 날씨 상태가 있다.
3. 5개의 버튼이 있다.(1개의 현재 위치, 4개의 다른 도시)
4. 도시 버튼을 클릭 할 때 마다 도시별 날씨가 나온다.
5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
6. 데이터를 들고 오는 동안 로딩 스피너가 회전한다.
*/

function App() {
  const [weather, setWeather] = useState(null); //날씨 상태 관리
  const [city, setCity] = useState(""); //city 상태 관리(버튼 클릭 시 선택된 도시)
  const [loading, setLoding] = useState(false); //spinner loading 상태 관리
  const cities = ["paris", "new york", "tokyo", "seoul"]; //버튼에 쓰일 도시 항목 관리
  const [apiErr, setApiErr] = useState(""); //api error 관리

  //현재 위치 가져오는 함수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      //위도 경도 가져오기
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  //날씨 api 호출 해 데이터 받기
  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4f44a25e2fa5798241e23cafa2d53c7d&units=metric`;
      setLoding(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoding(false);
    } catch (e) {
      console.log(e);
      setApiErr(e.message);
      setLoding(false);
    }
  };

  //city의 날씨 정보 가져오기
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f44a25e2fa5798241e23cafa2d53c7d&units=metric`;
      setLoding(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoding(false);
    } catch (e) {
      console.log(e);
      setApiErr(e.message);
      setLoding(false);
    }
  };

  //componentdidmount, componentdidupdate(city)
  //city가 빈스트링이면(처음 마운트 되었을 때 or current Location 버튼을 눌렀을 때), 현재 위치의 날씨 정보 가져오기(getCurrentLoation())
  //city가 빈스트링이 아니면(도시버튼을 눌렀을 경우), 도시의 날씨 정보 가져오기(getWeatherByCity())
  useEffect(() => {
    city === "" ? getCurrentLocation() : getWeatherByCity();
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : !apiErr ? (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            selectedCity={city}
          />
        </div>
      ) : (
        apiErr
      )}
    </div>
  );
}

export default App;
