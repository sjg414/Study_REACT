//doTimedLoading 썽크 액션 작성하기
import {Dispatch} from 'redux'
import {setLoading} from './actions'

//prettier-ignore
export const doTimedLoading =
  (duration: number = 3 * 1000) => //thunk action(함수 반환)
  (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    const timerId = setTimeout(() => {
      clearTimeout(timerId)
      dispatch(setLoading(false))
    }, duration)
  }
