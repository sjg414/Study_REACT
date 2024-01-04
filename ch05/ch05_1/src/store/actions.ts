//오늘 날짜 액션 만들기
import type {Action} from 'redux'

export type SetTodayAction = Action<'setToday'> & {
  today: Date
}

export type Actions = SetTodayAction
