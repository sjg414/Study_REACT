//로딩 타입 선언하기
import type {Action} from 'redux'

export type State = boolean

export type SetLoadingAction = Action<'@loading/setLoadingAction'> & {
  payload: State
}

export type Actions = SetLoadingAction
