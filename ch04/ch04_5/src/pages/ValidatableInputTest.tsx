//이메일 형식 검증하기
import {useRef, useCallback} from 'react'
import {Title} from '../components'
import {ValidatableInputMethods} from '../theme/daisyui'
import {ValidatableInput} from '../theme/daisyui'

export default function VaildatableInputTest() {
  const methodsRef = useRef<ValidatableInputMethods>(null)

  const validateEamil = useCallback(() => {
    if (methodsRef.current) {
      const [valid, valueOrErrorMessage] = methodsRef.current.validate()
      if (valid) alert(`${valueOrErrorMessage}는 유효한 이메일 주소입니다.`)
      else alert(valueOrErrorMessage)
    }
  }, [])

  //prettier-ignore
  return (
    <section className="mt-4">
      <Title>VaildatableInputTest</Title>
      <div className="flex justify-center mt-4">
        <div className='flex flex-col w-1/3 p-2'>
          <ValidatableInput type='email' ref={methodsRef}
            className='input-primary'/>
            <button onClick={validateEamil} className='mt-4 btn btn-primary'>
              validate
            </button>
        </div>
      </div>
    </section>
  )
}
