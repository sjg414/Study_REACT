//04-4 useEffect와 useLayoutEffect 훅 이해하기
import ClassLifecycle from './pages/ClassLifecycle'
import WindowResizeTest from './pages/WindowResizeTest'
import FetchTest from './pages/FetchTest'

export default function App() {
  return (
    <main>
      <FetchTest />
      <WindowResizeTest />
      <ClassLifecycle />
    </main>
  )
}
