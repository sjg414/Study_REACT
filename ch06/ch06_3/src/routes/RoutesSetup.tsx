//라우트 설정하기(Layout, 색인 라우트<Route index/> 적용, RequireAuth(접근허용자만 사용가능))
import {Routes, Route} from 'react-router-dom'
import NoMatch from './NoMatch'
import Board from '../pages/Board'
import Layout from './Layout'
import LandingPage from './LandingPage'
import SignUp from './Auth/SignUp'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import RequireAuth from './Auth/RequireAuth'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="/board"
          element={
            <RequireAuth>
              <Board />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/logout"
        element={
          <RequireAuth>
            <Logout />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
