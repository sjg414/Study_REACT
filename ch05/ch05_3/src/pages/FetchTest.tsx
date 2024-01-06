//썽크 액션으로 사용자 정보 변경 화면 작성하기
import {useCallback, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Title, Avatar} from '../components'
import {Button} from '../theme/daisyui'
import * as D from '../data'
import type {AppState} from '../store'
import * as F from '../store/fetchUser'

export default function RemoteUserTest() {
  const dispatch = useDispatch()
  const {
    loading,
    errorMessage,
    fetchUser: user
  } = useSelector<AppState, AppState>(state => state)

  const getRemoteUser = useCallback(() => {
    //random user 정보 가져오기
    dispatch<any>(F.getRemoteUser())
  }, [dispatch])
  const changeName = useCallback(() => {
    //user 이름 변경
    dispatch<any>(F.changeNameByFetching())
  }, [dispatch])

  const changeEamil = useCallback(() => {
    //이메일 변경
    dispatch<any>(F.changeEmail(D.randomEmail()))
  }, [dispatch])

  const changePicture = useCallback(() => {
    //아바타 변경
    dispatch<any>(F.changePicture({large: D.randomAvatar()}))
  }, [dispatch])

  useEffect(getRemoteUser, [getRemoteUser])

  return (
    <section className="mt-4">
      <Title>RemoteUserTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn btn-sm btn-primary" onClick={getRemoteUser}>
          get remote user
        </Button>
        <Button className="ml-4 btn-sm btn-accent" onClick={changeName}>
          change name
        </Button>
        <Button className="ml-4 btn-sm btn-success" onClick={changeEamil}>
          change eamil
        </Button>
        <Button className="ml-4 btn-sm btn-secondary" onClick={changePicture}>
          change picture
        </Button>
      </div>
      {loading && ( //로딩 시
        <div className="flex items-center justify-center">
          <button className="btn btn-circle loading"></button>
        </div>
      )}
      {errorMessage.length && ( //에러 시
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{errorMessage}</p>
        </div>
      )}

      <div className="flex justify-center p-4 mt-4">
        <Avatar src={user.picture.large} />
        <div className="ml-4">
          <p className="text-xl text-bold">
            {user.name.title}. {user.name.first} {user.name.last}
          </p>
          <p className="italic text-gray-600">{user.email}</p>
        </div>
      </div>
    </section>
  )
}
