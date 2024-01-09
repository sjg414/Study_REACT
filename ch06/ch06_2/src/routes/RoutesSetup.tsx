//라우트 설정하기(Layout, 색인 라우트<Route index/> 적용)
import {Routes, Route} from 'react-router-dom'
import NoMatch from './NoMatch'
import Board from '../pages/Board'
import Layout from './Layout'
import LandingPage from './LandingPage'

//Outlet에서 보이기 원하는 컴포넌트를 자식 라우터로 구성(Board, NoMatch)
export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
