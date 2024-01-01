//<input> 요소 테스트
import type {ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

export default function InputTest() {
  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  //value, checked의 값 변경시 마다 콜백 함수 호출 후 값 변경
  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setValue(notUsed => e.target.value)
  }, [])
  const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked(notUsed => e.target.checked)
  }, [])

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex items-center justify-center p-4 mt-4">
        <Input
          type="text"
          value={value}
          onChange={onChangeValue}
          className="input-primary input-sm"
        />
        <Input
          type="checkbox"
          checked={checked}
          onChange={onChangeChecked}
          className="ml-4 checkbox checkbox-primary input-sm"
        />
      </div>
    </section>
  )
}
