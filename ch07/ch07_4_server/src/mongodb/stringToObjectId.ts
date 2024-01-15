//문자열 -> objectid 변환 함수
import {ObjectId} from 'mongodb'

export const stringToObjectId = (id: string) => new ObjectId(id)
