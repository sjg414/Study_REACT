//05-1 리덕스 기본 개념 이해하기
//리덕스로 시계 구현하기
import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'

import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
