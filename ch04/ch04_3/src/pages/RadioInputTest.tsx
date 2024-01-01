//라디오 버튼 구현하기
import type {ChangeEvent} from 'react'
import {useMemo, useCallback, useState} from 'react'
import {Title, Subtitle} from '../components'
import * as D from '../data'

export default function RadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), []) //4개의 jobtitle 배열 저장, 의존성목록 없으므로 한번만 실행
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>(jobTitles[0]) //초기값 jobTitles의 0번째 요소
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSelectedJobTitle(notUsed => e.target.value)
  }, [])
  const radioInputs = useMemo(
    //의존성 목록의 값 변경 시 콜백 함수 호출
    () =>
      jobTitles.map((value, index) => (
        <label key={index} className="flex justify-start cursor-pointer label">
          <input
            type="radio"
            name="jobs"
            className="mr-4 radio radio-primary"
            checked={value === selectedJobTitle}
            defaultValue={value}
            onChange={onChange}
          />
          <span className="label-text">{value}</span>
        </label>
      )),
    [jobTitles, selectedJobTitle, onChange]
  )

  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="flex flex-col justify-center mt-4 ">
        <Subtitle>What is your job?</Subtitle>
        <Subtitle className="mt-4">Selected Job: {selectedJobTitle}</Subtitle>
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">{radioInputs}</div>
        </div>
      </div>
    </section>
  )
}
