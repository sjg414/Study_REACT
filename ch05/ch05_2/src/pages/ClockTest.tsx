//시계 테스트 코드 작성
import {useSelector, useDispatch} from 'react-redux'
import {Title} from '../components'
import {useInterval} from '../hooks'
import type {AppState} from '../store'
import * as C from '../store/clock'

export default function ClockTest() {
  const clock = useSelector<AppState, C.State>(state => state.clock) //useSelector: store 상태값 반환(상태값이 바뀔 시 리렌더링)
  const dispatch = useDispatch()
  useInterval(() => dispatch(C.setClock(new Date()))) //dispatch: 시계 설정 액션 발생

  return (
    <section className="mt-4">
      <Title>ClockTest</Title>
      <div className="flex flex-col items-center mt-4">
        <p className="text-2xl text-blue-600 text-bold">{clock.toLocaleTimeString()}</p>
        <p className="text-lg text-blue-400 text-bold">{clock.toLocaleDateString()}</p>
      </div>
    </section>
  )
}
