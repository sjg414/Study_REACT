import React from 'react'
import logo from './logo.svg'
import './App.css'
import P from './P'

/*React에서는  같은 요소 or id의 구분을 위해 Key 속성을 사용한다.
export default function App() {
  const texts = [<p key="1">hello</p>, <p key="2">world</p>]
  return <div>{texts}</div>
}*/

/*map 메서드 이용
export default function App() {
  const texts = ['hello', 'world'].map((text, index) => 
    <p key={index}>{text}</p>)
  return <div>{texts}</div>
}*/

/*Chilren props : 부모요소에서 자식요소를 설정할 때 사용(최하단요소(자식요소를 가질 수 없는 요소)에서는 사용불가)
export default function App() {
  const texts = ['hello', 'world'].map((text, index) => 
    <p key={index} children={text} />)
  return <div children={texts} />
}*/

//P 컴포넌트 사용
export default function App() {
  const texts = ['hello', 'world'].map((text, index) => <P key={index} children={text} />)
  return <div children={texts} />
}
