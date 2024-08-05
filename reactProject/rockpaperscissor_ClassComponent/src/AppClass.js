//App Class Component

import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

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

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      result2: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    let resultValue = this.judgement(choice[userChoice], computerChoice);
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: resultValue,
    });
    if (resultValue === "tie") this.setState({ result2: "tie" });
    else this.setState({ result2: resultValue === "win" ? "winner" : "loser" });
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length); // item 배열 크기 만큼 정수의 랜덤값 생성
    let final = itemArray[randomItem]; //해당 인덱스의 키 값 선택
    return choice[final];
  };

  //결과 판단
  judgement = (user, computer) => {
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

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          {/* onClick에 함수를 넣을 때는 콜백 형식으로 넣어줘야한다.(함수만 넣을 경우 렌더링 시 바로 실행된다.) */}
          <img
            className="btn-img"
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png"
            onClick={() => this.play("scissors")}
            alt="Scissors"
          />
          <img
            className="btn-img"
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png"
            onClick={() => this.play("rock")}
            alt="Rock"
          />
          <img
            className="btn-img"
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png"
            onClick={() => this.play("paper")}
            alt="Paper"
          />
        </div>
        <div className={`result2 ${this.state.result}`}>
          <h1>{this.state.result2}</h1>
        </div>
      </div>
    );
  }
}
