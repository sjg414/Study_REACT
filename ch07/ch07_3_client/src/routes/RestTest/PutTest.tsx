//data에서 id 속성값만 추려내기
import {useState, useCallback} from 'react'
import {put} from '../../server'
import * as D from '../../data'

type Body = Record<'id' | string, any>
type Data = {
  ok: boolean
  body?: Body
  errorMessage?: string
}

export default function PutTest() {
  const [data, setData] = useState<Data | null>(null)
  const [errorMessage, setErrorMesage] = useState<string | null>(null)

  const putTest = useCallback(() => {
    put('/test/1234', D.makeRandomCard())
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMesage(error.message))
  }, [])

  return (
    <div className="mb-4">
      <div className="flex justify-center mb-4">
        <button onClick={putTest} className="btn btn-primary">
          PUT id 1234
        </button>
      </div>
      <div className="mt-4 text-center">
        <p>id: {data?.body?.id}</p>
        <p>data: {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error: {errorMessage}</p>}
      </div>
    </div>
  )
}
