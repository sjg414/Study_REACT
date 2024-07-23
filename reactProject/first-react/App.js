//useState : 변하는 값을 바로 렌더링하기 위해 사용한다.

import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter += 1;
    setCounter2(counter2 + 1); //set함수는 비동기적으로 작동하기 때문에(함수가 다 끝난 후에 한 번에 실행된다.) consol로 바로 찍으면 이전의 값이 나온다.
    console.log("counter는 ", counter, "counter2 state는 ", counter2); //state 함수가 실행되면서 리렌더링 될 때는 컴포넌트를 다시 실행 해 counter = 0으로 초기값이 적용 돼 counter는 계속 1이 나온다.
  };

  //1. 유저가 버튼을 클릭한다.
  //2. counter +=1 1이 됨
  //3. setState함수 호출
  //4. console.log 실행
  //5. 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전의 값이 보인다.
  //6. 함수끝
  //7. app 다시 re render
  //8. let counter = 0을 거치면서 counter 값은 다시 0으로 초기화
  //9. state값은 update가 되면서 다시 render를한다
  return (
    <div>
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
