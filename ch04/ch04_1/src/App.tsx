//04-1 리액트 훅(use-, 반드시 함수 컴포넌트에서만 사용(클래스 컴포넌트를 구현할 때 복잡함과 모호함을 극복할 목적으로 만들어짐))
//시계 앱 만들기(, , )
import Clock from './pages/Clock'
import {useClock} from './hooks'

/*
export default function App() {
  const [today, setToday] = useState(new Date()) //값 변경 시 자동 재랜더링을 위한 useState 리액트 훅(현재 값 : today, 세터 : setToday)

  useEffect(() => {
    //콜백함수를 위한 useEffect 리액트 훅
    const duration = 1000 //1초마다
    const id = setInterval(() => {
      //1초마다 시간을 받기 위한 setInterval 리액트 훅
      setToday(new Date())
    }, duration)
    return () => clearInterval(id) //메모리 할당 해제
  }, [])
  return <Clock today={today} />
}*/

//useClock 커스텀 훅으로 만든 시계
export default function App() {
  const today = useClock()
  return <Clock today={today} />
}
