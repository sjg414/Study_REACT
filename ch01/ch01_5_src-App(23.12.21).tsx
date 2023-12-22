import * as D from './data'

export default function App() {
  return (
    //가짜 데이터 이용하기
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" alt="randomAvatar" />
      <img src={D.randomImage()} height="300" alt="randomImage" />
    </div>
  )
}
