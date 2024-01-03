//입력 상자에 입력한 값을 창에 띄우기(Input 컴포넌트로 수정)
import {useRef, useEffect, useCallback} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

export default function InputValueTest() {
  const inputRef = useRef<HTMLInputElement>(null)

  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])

  useEffect(() => inputRef.current?.focus(), [])
  //prettier-ignore
  return (
    <section className="mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4">
        <div className='flex flex-col w-1/3 p-2'>
        <Input ref={inputRef} className="input input-primary" />
        <button onClick={getValue} className='mt-4 btn btn-primary'>
          get value
        </button>
        </div>
      </div>
    </section>
  )
}
