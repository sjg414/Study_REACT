//thunk action(비동기) 만들기
import {Dispatch} from 'redux'
import {setErrorMessage} from './actions'

export const generateErrorMessage =
  (errorMessage: string = 'some error occurred') =>
  (dispatch: Dispatch) => {
    dispatch(setErrorMessage(''))
    try {
      throw new Error(errorMessage)
    } catch (e) {
      if (e instanceof Error) dispatch(setErrorMessage(e.message))
    }
  }
