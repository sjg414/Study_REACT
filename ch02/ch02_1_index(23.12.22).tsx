import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App' //component
import reportWebVitals from './reportWebVitals'
// //리액트 핵심 기능
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(//코드 판별 후 오류메시지 보여주는 컴포넌트
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//JS Physical DOM
let pPhysicalDOM = document.createElement('p')
pPhysicalDOM.innerText = 'Hello Physical DOM world!'
document.body.appendChild(pPhysicalDOM) //화면에 표시(Rendering)

//React Virtual DOM
const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) //<div id='root'/>

root.render(pVirtualDOM) //Virtual DOM => Physical DOM으로 바꿔주는 역할(화면에 표시 : Rendering)

/* 이미 렌더링된 상태의 물리 DOM에서 내용(속성)을 변경하기 위해서는 해당 요소의 id를 이용해 객체를 불러와 속성을 변경해야 한다. 
하지만 이는 매번 요소에 부여할 id를 중복되지 않게 만들어야하는 부담감이 있다.
이를 해결하기 위해 리액트에서는 가상 DOM이라는 개념을 이용해 내용(속성)을 자식노드(appendChild)로 지정해 보여주는게 아닌(JS의 물리 DOM방식), render 메서드를 이용해 내용을 보여주므로
내용(속성) 변경시 id를 찾을 필요 없이 변경만 해주면 된다.*/
