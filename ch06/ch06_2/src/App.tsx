//06-2 Outlet 컴포넌트와 중첩 라우팅(Outlet : 다른 컴포넌트가 렌더링되는 위치를 지정해 주는 용도 | 중첩 라우팅: 부모/자식 관계의 라우팅)
import {Provider as ReduxProvider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BrowserRouter} from 'react-router-dom'
import RoutesSetup from './routes/RoutesSetup'
import {useStore} from './store'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <RoutesSetup />
        </BrowserRouter>
      </DndProvider>
    </ReduxProvider>
  )
}
