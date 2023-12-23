import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as D from './data'

/*JSX을 이용한 구현(간결성, 가독성)
const rootVirtualDOM = (
  <ul>
    <li>
      <a href="http://www.google.com" target="_black">
        <p>go to Google</p>
      </a>
    </li>
  </ul>
)*/

/*JSX구문은 React.createElement 호출이므로(반환값이 Virtual DOM object), 변수 or 배열에 배정 가능
const children = [
  <li>
    <a href="http://www.google.com" target="_black">
      <p>go to Google</p>
    </a>
  </li>,
  <li>
    <a href="http://www.facebook.com" target="_black">
      <p>go to Facebook</p>
    </a>
  </li>,
  <li>
    <a href="http://www.twitter.com" target="_black">
      <p>go to Twitter</p>
    </a>
  </li>
]*/

/*map 메서드를 이용한 다른 컴포넌트 배열 만들기
const children = [0, 1, 2].map((n: number) => <h3>Hello world! {n}</h3>)
*/

//가짜데이터를 이용해 10개의 배열 만들기
const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))

const rootVirtualDOM = <div>{children}</div> //{children}을 사용할 경우, 반드시 부모 컴포넌트로 감싸야한다.(XML 작성 규칙 준수 필수!!)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
