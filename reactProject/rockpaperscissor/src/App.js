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
  const [userSelect, setUserSelect] = useState(null); //user가 선택한 값 state
  const [computerSelect, setComputerSelect] = useState(null); //computer가 선택한 값 state
  const [result, setResult] = useState(""); //결과 state
  const [result2, setResult2] = useState("");

  //user가 버튼 클릭 시(가위 바위 보 선택 시)
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]); //user 값 변경
    let computerChoice = randomChoice(); //computer 값 랜덤 선택
    setComputerSelect(computerChoice); //computer 값 변경
    let resultValue = judgement(choice[userChoice], computerChoice);
    setResult(resultValue); //결과 판단
    if (resultValue === "tie") setResult2("tie");
    else setResult2(resultValue === "win" ? "winner" : "loser");
  };

  //computer 값 랜덤 선택
  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length); // item 배열 크기 만큼 정수의 랜덤값 생성
    let final = itemArray[randomItem]; //해당 인덱스의 키 값 선택
    return choice[final];
  };

  //결과 판단
  const judgement = (user, computer) => {
    //user와 computer 선택 값 받기
    /*
    user와 computer가 같을 시 tie
    user "Rock"이고, computer가 "Scissors"이면 "win"
                    computer가 "Paper"이면 "lose"
    user "Scissors"이고, computer가 "Rock"이면 "lose"
                        computer가 "Paper"이면 "win"
    user "Paper"이고, computer가 "Rock"이면 "win"
                     computer가 "Scissors"이면 "lose"  
     */
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        {/* onClick에 함수를 넣을 때는 콜백 형식으로 넣어줘야한다.(함수만 넣을 경우 렌더링 시 바로 실행된다.) */}
        <img
          className="btn-img"
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png"
          onClick={() => play("scissors")}
          alt="Scissors"
        />
        <img
          className="btn-img"
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png"
          onClick={() => play("rock")}
          alt="Rock"
        />
        <img
          className="btn-img"
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png"
          onClick={() => play("paper")}
          alt="Paper"
        />
      </div>
      <div className={`result2 ${result}`}>
        <h1>{result2}</h1>
      </div>
    </div>
  );
}

export default App;
