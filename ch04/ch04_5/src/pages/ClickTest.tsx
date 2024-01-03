//이미지 파일을 대상으로 [열기] 대화 상자 띄우기
import {useRef, useCallback} from 'react'
import {Title} from '../components'

export default function ClickTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick = useCallback(() => inputRef.current?.click(), [])

  return (
    <section className="mt-4">
      <Title>ClickTest</Title>
      <div className="flex justify-center items-center mt-4">
        <button className="btn btn-primary mr-4" onClick={onClick}>
          Click me
        </button>
        <input ref={inputRef} className="hidden" type="file" accept="image/*" />
      </div>
    </section>
  )
}
