//useOrCreate 함수 구현하기
const cache: Record<string, any> = {} //전역변수 cache

export const userOrCreate = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) cache[key] = callback() //cache[key]에 값이 없다면, 값 저장(콜백 함수 한 번만 실행)
  return cache[key] as T //cache[key] 값 반환
}
