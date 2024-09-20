import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count); //state 선택(store에 있는)
  const dispatch = useDispatch(); //action을 넘기기 위한 함수

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } }); //해당 type의 action을 reducer로 전달
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>counter : {count}</h1>
      <button onClick={() => increase()}>증가</button>
      <button onClick={() => decrement()}>감소</button>
      <Box />
    </div>
  );
}

export default App;
