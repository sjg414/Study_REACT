import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

//1. box 2개(title, picture, result)
//2. 가위 바위 보 버튼
//3. 버튼 클릭시 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3,4의 결과를 가지고 승패를 따진다.
//6. 승패결과에 따라 박스 테두리색이 바뀐다.(승: 초록, 패: 빨강, 비김: 검정)
function App() {
  const [yourThing, setyourThing] = useState(0); //you의 가위 바위 보 상태 관리
  const [computerThing, setcomputerThing] = useState(0); //computer의 가위 바위 보 상태 관리
  const [yourResult, setyourResult] = useState("TIE"); //you의 승패 결과
  const [computerResult, setcomputerResult] = useState("TIE"); //computer의 승패 결과
  const [result, setResult] = useState(""); //you의 승패 결과

  //가위 바위 보 버튼 클릭 시
  const youClickThing = (value) => {
    computerRandomThing(); //computer 랜덤값 함수 실행
    setyourThing(value); //클릭 한 버튼 값으로 상태 변경

    //승패결과 판정
    if (yourThing === computerThing) {
      setyourResult("TIE");
      setcomputerResult("TIE");
      setResult("TIE");
    } else if (yourThing === 0 && computerThing === 1) {
      setyourResult("LOSER");
      setcomputerResult("WINNER");
      setResult("LOSE");
    } else if (yourThing === 0 && computerThing === 2) {
      setyourResult("WINNER");
      setcomputerResult("LOSER");
      setResult("WIN");
    } else if (yourThing === 1 && computerThing === 0) {
      setyourResult("WINNER");
      setcomputerResult("LOSER");
      setResult("WIN");
    } else if (yourThing === 1 && computerThing === 2) {
      setyourResult("LOSER");
      setcomputerResult("WINNER");
      setResult("LOSE");
    } else if (yourThing === 2 && computerThing === 0) {
      setyourResult("LOSER");
      setcomputerResult("WINNER");
      setResult("LOSE");
    } else {
      setyourResult("WINNER");
      setcomputerResult("LOSER");
      setResult("WIN");
    }
  };

  //computer 랜덤값 생성( 0~2)
  const computerRandomThing = () => {
    let RandomValue = Math.floor(Math.random() * 3);
    setcomputerThing(RandomValue);
  };

  return (
    // <div>
    //   <div className="bixBox">
    //     <div className="youBox">
    //       <p>you</p>
    //       yourThing : {yourThing}
    //       <p>{yourResult}</p>
    //     </div>
    //     <div className="computerBox">
    //       <p>computer</p>
    //       computerThing : {computerThing}
    //       <p>{computerResult}</p>
    //     </div>
    //   </div>
    //   <div className="buttonBox">
    //     <button onClick={() => youClickThing(0)}>가위</button>
    //     <button onClick={() => youClickThing(1)}>바위</button>
    //     <button onClick={() => youClickThing(2)}>보</button>
    //   </div>
    //   <div className="resultBox">
    //     <p>{result}</p>
    //   </div>
    // </div>

    <div>
      <Box />
      <Box />
    </div>
  );
}

export default App;
