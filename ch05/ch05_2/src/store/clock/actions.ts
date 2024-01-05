//액션 생성기 작성
import type * as T from './types'

export const setClock = (payload: T.State): T.SetClockAction => ({
  type: '@clock/setClock',
  payload
})
