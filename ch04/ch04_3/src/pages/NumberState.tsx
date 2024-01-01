//세터 함수의 매개변수를 콜백으로 호출(가변 상태를 캐시)
import {useState, useCallback} from 'react'
import {Title} from '../components'
import {Icon} from '../theme/daisyui'

export default function NumberState() {
  const [count, setCount] = useState<number>(0) //초기값 0

  const increment = useCallback(() => {
    setCount(count => count + 1) //세터 함수
  }, [])
  const decrement = useCallback(() => {
    setCount(count => count - 1) //세터 함수
  }, [])

  return (
    <section className="mt-4">
      <Title>CopyMe</Title>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-1/4 mt-4">
          <Icon name="add" className="btn-primary btn-lg" onClick={increment} />
          <p className="text-3xl text-bold text-primary">{count}</p>
          <Icon name="remove" className="btn-accent btn-lg" onClick={decrement} />
        </div>
      </div>
    </section>
  )
}
