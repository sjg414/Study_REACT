import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

//1. box 2개(title, picture, result)
//2. 가위 바위 보 버튼
//3. 버튼 클릭시 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3,4의 결과를 가지고 승패를 따진다.
//6. 승패결과에 따라 박스 테두리색이 바뀐다.(승: 초록, 패: 빨강, 비김: 검정)

//Items
const choice = {
  rock: {
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/51rOMX5z40L.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/manoega-scissors-stainless-steel-black__1215197_pe911911_s5.jpg?f=s",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0T-QEB7PfNnFmRcCOpwn1FntAuQ0Yt9FXqw&s",
  },
};

function App() {
  // const [yourThing, setyourThing] = useState(0); //you의 가위 바위 보 상태 관리
  // const [computerThing, setcomputerThing] = useState(0); //computer의 가위 바위 보 상태 관리
  // const [yourResult, setyourResult] = useState("TIE"); //you의 승패 결과
  // const [computerResult, setcomputerResult] = useState("TIE"); //computer의 승패 결과
  // const [result, setResult] = useState(""); //you의 승패 결과

  // //가위 바위 보 버튼 클릭 시
  // const youClickThing = (value) => {
  //   computerRandomThing(); //computer 랜덤값 함수 실행
  //   setyourThing(value); //클릭 한 버튼 값으로 상태 변경

  //   //승패결과 판정
  //   if (yourThing === computerThing) {
  //     setyourResult("TIE");
  //     setcomputerResult("TIE");
  //     setResult("TIE");
  //   } else if (yourThing === 0 && computerThing === 1) {
  //     setyourResult("LOSER");
  //     setcomputerResult("WINNER");
  //     setResult("LOSE");
  //   } else if (yourThing === 0 && computerThing === 2) {
  //     setyourResult("WINNER");
  //     setcomputerResult("LOSER");
  //     setResult("WIN");
  //   } else if (yourThing === 1 && computerThing === 0) {
  //     setyourResult("WINNER");
  //     setcomputerResult("LOSER");
  //     setResult("WIN");
  //   } else if (yourThing === 1 && computerThing === 2) {
  //     setyourResult("LOSER");
  //     setcomputerResult("WINNER");
  //     setResult("LOSE");
  //   } else if (yourThing === 2 && computerThing === 0) {
  //     setyourResult("LOSER");
  //     setcomputerResult("WINNER");
  //     setResult("LOSE");
  //   } else {
  //     setyourResult("WINNER");
  //     setcomputerResult("LOSER");
  //     setResult("WIN");
  //   }
  // };

  // //computer 랜덤값 생성( 0~2)
  // const computerRandomThing = () => {
  //   let RandomValue = Math.floor(Math.random() * 3);
  //   setcomputerThing(RandomValue);
  // };
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
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
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect} />
      </div>
      <div className="main">
        {/* onClick에 함수를 넣을 때는 콜백 형식으로 넣어줘야한다.(함수만 넣을 경우 렌더링 시 바로 실행된다.) */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
