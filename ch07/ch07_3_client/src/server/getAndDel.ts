//GET과 DELETE 메서드 호출용 함수 구현
import {getServerUrl} from './getServerUrl'

export const get = (path: string) => fetch(getServerUrl(path))
export const del = (path: string) => fetch(getServerUrl(path), {method: 'DELETE'})
