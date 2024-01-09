//로그인한 사용자만 접근하게 하기
import type {FC, PropsWithChildren} from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'

type RequireAuthProps = {}

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({children}) => {
  const {loggedUser} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loggedUser) navigate(-1)
  }, [loggedUser, navigate])

  return <>{children}</>
}

export default RequireAuth
