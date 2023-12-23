import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

/*함수 컴포넌트
export default function App() {
  return (
    <ul>
      <li>
        <a href="http://www.google.com" target="_black">
          <p>go to Google</p>
        </a>
      </li>
    </ul>
  )
}*/

/*ClassComponent 구현
export default class App extends Component {
  render() { //render 메서드 반환값으로 null | React.createElement | JSX Virtual DOM
    return (
      <ul>
        <li>
          <a href="http://www.google.com" target="_black">
            <p>go to Google</p>
          </a>
        </li>
      </ul>
    )
  }
}*/

/*로직 추가하기(jSX 구문과 타입스크립트 함께 사용)
export default class App extends Component {
  render() {
    const isLoading = true
    if (isLoading) return <p>loading...</p>

    return (
      <ul>
        <li>
          <a href="http://www.google.com" target="_black">
            <p>go to Google</p>
          </a>
        </li>
      </ul>
    )
  }
}*/

/*단축 평가 형태로 구현
export default class App extends Component {
  render() {
    const isLoading = true
    const children = (
      <li>
        <a href="http://www.google.com" target="_black">
          <p>go to Google</p>
        </a>
      </li>
    )
    return (
      <div>
        {isLoading && <p>loading...</p>}
        {!isLoading && <ul>{children}</ul>}
      </div>
    )
  }
}*/

/*isLoading값에 따라 분기
export default class App extends Component {
  render() {
    const isLoading = true
    const children = isLoading ? (
      <p>loading...</p>
    ) : (
      <ul>
        <li>
          <a href="http://www.google.com">
            <p>go to Google</p>
          </a>
        </li>
      </ul>
    )
    return <div>{children}</div>
  }
}*/

/*클래스 컴포넌트, 속성 이용(virtual DOM 생성 후 rendering)
export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href="http://www.google.com" text="go to Google" />
        <ClassComponent href="http://www.twitter.com" text="go to Twitter" />
      </ul>
    )
  }
}*/

/*function 키워드 방식 함수 컴포넌트
export default function App() {
  return <div>Hello function-keyword component!</div>
}*/

/*화살표 방식 함수 컴포넌트
const App = () => {
  return <h1>function component</h1>
}
export default App*/

/*함수 컴포넌트(reder 메서드 없이 바로 사용가능)
export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to Google" />
      <ArrowComponent href="https://twitter.com" text="go to Twitter" />
    </ul>
  )
}*/
