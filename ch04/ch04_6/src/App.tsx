//04-6 useContext 훅 이해하기(부모 컴포넌트의 정보를 자식컴포넌트 ~ 손자....에게 전달할 수 있도록 하는 기능)
import ResponsiveContextTest from './pages/ResponsiveContextTest'
import {ResponsiveProvider} from './contexts'

export default function App() {
  return (
    <ResponsiveProvider>
      <main>
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  )
}
