//로거 미들웨어 구현하기
import {Action, Dispatch} from 'redux'

export default function logger<S = any>({getState}: {getState: () => S}) {
  return (next: Dispatch) => (action: Action) => {
    console.log('state before next', getState()) //redux store 모든 상탯값
    console.log('action', action)
    const returnedAction = next(action)
    console.log('state after next', getState()) //action 후 변경된 저장소의 모든 상탯값
    return returnedAction
  }
}
