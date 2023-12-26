//스타일 객체 설정하기(리액트 컴포넌트에서는 문자열이 아닌 객체를 사용해야 함)
export default function Style() {
  return (
    <div>
      <h3>Style</h3>
      <span className="material-icons" style={{color: 'blue'}}>
        home
      </span>
      <span className="material-icons" style={{fontSize: '50px', color: 'red'}}>
        check_circle_outline
      </span>
    </div>
  )
}
