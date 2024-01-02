//객체 타입 값일 때 useState 훅 사용하기
import type {FormEvent, ChangeEvent} from 'react'
import {useCallback, useState} from 'react'
import {Title} from '../components'

type FormType = {
  //속성 형태로 구현
  name: string
  email: string
}

export default function ObjectState() {
  const [form, setForm] = useState<FormType>({name: '', email: ''}) //객체를 상태로 만들기

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault() //재렌더링 방지 필수!!(onSubmit 이벤트 발생 시 웹페이지를 재렌더링하기 때문)

      alert(JSON.stringify(form, null, 2))
    },
    [form]
  )

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({...state, name: e.target.value}))
  }, [])
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(form => ({...form, email: e.target.value}))
  }, [])

  //prettier-ignore
  return (
    <section className="mt-4">
      <Title>ObjectState</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <input value={form.name} onChange={onChangeName} id="name" type="text" placeholder="enter your name" className="input input-primary"/>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">email</span>
            </label>
            <input value={form.email} onChange={onChangeEmail} id="email" type="email" placeholder="enter your email" className="input input-primary"/>
          </div>
          <div className="flex justify-center mt-4">
            <input type="submit" value="Submit" className="w-1/2 btn btn-sm btn-primary"/>
            <input defaultValue="Cancel" className="w-1/2 ml-4 btn btn-sm"/>
          </div>
        </form>
      </div>
    </section>
  )
}
