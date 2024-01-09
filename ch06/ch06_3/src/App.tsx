//06-3 공개 라우트(누구나 접근 가능)와 비공개 라우트(로그인한 사용자만 접근 가능) 구현하기
import {Provider as ReduxProvider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './contexts'
import RoutesSetup from './routes/RoutesSetup'
import {useStore} from './store'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <AuthProvider>
            <RoutesSetup />
          </AuthProvider>
        </BrowserRouter>
      </DndProvider>
    </ReduxProvider>
  )
}
