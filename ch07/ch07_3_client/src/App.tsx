//07-3 express 프레임워크로 API 서버 만들기
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
