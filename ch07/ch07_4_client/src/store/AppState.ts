//앱 상태 파일 작성하기
import * as L from './listEntities'
import * as LO from './listidOrders'
import * as LC from './listidCardidOrders'
import * as C from './cardEntities'

export type AppState = {
  listEntities: L.State
  listidOrders: LO.State
  listidCardidOrders: LC.State
  cardEntities: C.State
}
